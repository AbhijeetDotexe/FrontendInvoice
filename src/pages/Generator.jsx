import React, { useState, useRef } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from '../components/InvoicePDF';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Sparkles, Download, RefreshCw, FileText, 
  Wand2, CheckCircle, Clock, Zap, ChevronRight, Eye, 
  Copy, Upload, Image as ImageIcon, X 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Generator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);
  const [image, setImage] = useState(null); // State for the uploaded image
  const fileInputRef = useRef(null); // Ref to trigger hidden file input

  const [examples] = useState([
    "Bill Microsoft $5,000 for Cloud Architecture Consulting. 50 hours at $100/hr. Include 10% tax.",
    "Invoice for website redesign project: $3,500 flat fee, plus $500 for additional revisions. Due in 30 days.",
    "Consulting services for Q3 2024: 120 hours at $85/hour, with 5% early payment discount.",
    "Monthly retainer for social media management: $1,200 per month, 10% tax included."
  ]);

  // --- API INTEGRATION START ---
  const handleGenerate = async () => {
    if (!prompt && !image) return; // Ensure at least one input exists
    setLoading(true);
    setInvoiceData(null);

    try {
      // 1. Prepare FormData for Text + Image upload
      const formData = new FormData();
      formData.append('prompt', prompt);
      if (image) {
        formData.append('image', image);
      }

      // 2. Call the Backend (Port 3000)
      const res = await axios.post('http://localhost:3000/api/invoice/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const apiData = res.data;

      // 3. Map API Data to UI Structure
      const formattedData = {
        invoiceNumber: apiData.invoiceNumber,
        date: apiData.date,
        dueDate: apiData.dueDate,
        currency: apiData.currency || '$',
        
        // Sender Details (Hardcoded fallback as AI usually extracts client details)
        from: {
          name: apiData.from?.name || "Abhijeet Rana",
          email: apiData.from?.email || "abhijeet4rana@gmail.com",
          address: apiData.from?.address || "New Delhi, 110049"
        },

        // Client Details
        to: apiData.billedTo || { name: "", email: "", address: "" },
        billedTo: apiData.billedTo, 

        // Items
        items: apiData.items || [],

        // Totals
        subtotal: apiData.subtotal || 0,
        tax: apiData.taxPercent || 0, 
        taxPercent: apiData.taxPercent || 0,
        taxAmount: apiData.taxAmount || 0,
        total: apiData.total || 0,
        notes: apiData.note || "Thank you for your business!"
      };

      setInvoiceData(formattedData);

    } catch (error) {
      console.error("Generation Error:", error);
      alert("Failed to generate invoice. Is the backend server running on port 3000?");
    } finally {
      setLoading(false);
    }
  };
  // --- API INTEGRATION END ---

  const insertExample = (example) => {
    setPrompt(example);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
  };

  // Handle File Selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 bg-[#0A0A0A]" />
      <div className="fixed top-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 px-4 py-6 max-w-7xl mx-auto w-full">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <Wand2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">AI-Powered Generator</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Generate Professional
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Invoices in Seconds
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Describe your work in plain English or upload a receipt. Our AI handles the formatting, calculations, and professional layout.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* Left Panel - Input */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 w-full"
          >
            {/* Examples Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 w-full">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Try these examples:
              </h3>
              <div className="space-y-3">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => insertExample(example)}
                    className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors flex-1 pr-4">
                        {example}
                      </p>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  Describe Your Invoice
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3" /> Copy
                </button>
              </div>

              <div className="relative">
                <textarea
                  className="w-full h-32 bg-black/30 border-2 border-white/10 rounded-xl p-4 text-base focus:outline-none focus:border-purple-500/50 transition-all duration-300 placeholder:text-gray-600 resize-none backdrop-blur-sm"
                  placeholder="Describe the work you did, rates, hours, client details..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.ctrlKey && e.key === 'Enter') handleGenerate();
                  }}
                />
                
                {/* --- IMAGE UPLOAD SECTION START --- */}
                <div className="mt-3">
                  <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef} 
                    onChange={handleImageChange} 
                    className="hidden" 
                  />
                  
                  {!image ? (
                    <button 
                      onClick={() => fileInputRef.current.click()}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Upload className="w-4 h-4" />
                      Attach Receipt / Handwritten Note
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-md">
                          <ImageIcon className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-sm text-gray-200 truncate max-w-[200px]">
                          {image.name}
                        </span>
                      </div>
                      <button 
                        onClick={removeImage}
                        className="text-gray-400 hover:text-red-400 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                {/* --- IMAGE UPLOAD SECTION END --- */}

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>~3s generation time</span>
                  </div>
                  <span>{prompt.length}/500 chars</span>
                </div>
              </div>

              <motion.button
                onClick={handleGenerate}
                // Button is disabled only if BOTH prompt AND image are missing, or if loading
                disabled={loading || (!prompt && !image)}
                className={`mt-6 w-full py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden ${
                  loading || (!prompt && !image)
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25'
                }`}
                whileHover={!loading && (prompt || image) ? { scale: 1.02 } : {}}
                whileTap={!loading && (prompt || image) ? { scale: 0.98 } : {}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate Invoice
                    <span className="hidden md:inline text-sm opacity-75">(Ctrl+Enter)</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Panel - Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 w-full"
          >
            {/* Preview Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                Invoice Preview
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Real-time preview
              </div>
            </div>

            {/* Preview Container */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 w-full h-full min-h-[600px]">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full py-20"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-purple-500/20 rounded-full" />
                      <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" />
                      <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-purple-400 animate-pulse" />
                    </div>
                    <p className="mt-6 text-lg font-semibold">AI is drafting your invoice</p>
                    <p className="text-gray-400 mt-2 text-center">Reading text & images...</p>
                  </motion.div>
                ) : invoiceData ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 h-full flex flex-col"
                  >
                    {/* Success Message */}
                    <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-1">Invoice Generated Successfully!</h4>
                      <p className="text-gray-300 text-sm">Your professional invoice is ready for download.</p>
                    </div>

                    {/* Invoice Preview Card */}
                    <div className="flex-1 overflow-hidden">
                      <motion.div 
                        initial={{ rotate: -1 }}
                        animate={{ rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white text-black rounded-xl shadow-2xl overflow-hidden border-2 border-white/20 hover:border-purple-500/30 transition-all duration-500 max-h-[500px] overflow-y-auto"
                      >
                        {/* Invoice Content */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-bold">INVOICE</h2>
                              <p className="text-purple-200 text-sm">#{invoiceData.invoiceNumber}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs opacity-90">Date</p>
                              <p className="font-semibold text-sm">{invoiceData.date}</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4">
                          {/* Parties */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <h3 className="text-xs font-semibold text-gray-500 mb-1">FROM</h3>
                              <p className="font-bold text-sm">{invoiceData.from?.name}</p>
                              <p className="text-xs text-gray-600">{invoiceData.from?.address}</p>
                              <p className="text-xs text-gray-600">{invoiceData.from?.email}</p>
                            </div>
                            <div>
                              <h3 className="text-xs font-semibold text-gray-500 mb-1">BILL TO</h3>
                              <p className="font-bold text-sm">{invoiceData.to?.name}</p>
                              <p className="text-xs text-gray-600">{invoiceData.to?.address}</p>
                              <p className="text-xs text-gray-600">{invoiceData.to?.email}</p>
                            </div>
                          </div>

                          {/* Items Table */}
                          <div className="border rounded-lg overflow-hidden mb-4">
                            <div className="grid grid-cols-12 bg-gray-100 p-2 text-xs font-semibold">
                              <div className="col-span-6">Description</div>
                              <div className="col-span-2 text-center">Qty</div>
                              <div className="col-span-2 text-right">Rate</div>
                              <div className="col-span-2 text-right">Amount</div>
                            </div>
                            {invoiceData.items.map((item, index) => (
                              <div key={index} className="grid grid-cols-12 p-2 border-t text-sm">
                                <div className="col-span-6">{item.description}</div>
                                <div className="col-span-2 text-center">{item.quantity}</div>
                                <div className="col-span-2 text-right">{invoiceData.currency}{item.rate}</div>
                                <div className="col-span-2 text-right font-semibold">
                                  {invoiceData.currency}{item.amount}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Totals */}
                          <div className="ml-auto max-w-xs space-y-1">
                            <div className="flex justify-between text-gray-600 text-sm">
                              <span>Subtotal</span>
                              <span>{invoiceData.currency}{invoiceData.subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 text-sm">
                              <span>Tax ({invoiceData.tax}%)</span>
                              <span>{invoiceData.currency}{invoiceData.taxAmount}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t pt-2">
                              <span>Total</span>
                              <span className="text-purple-600">{invoiceData.currency}{invoiceData.total}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <button 
                        onClick={() => setInvoiceData(null)}
                        className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all text-sm"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Generate Another
                      </button>

                      <PDFDownloadLink
                        document={<InvoicePDF data={invoiceData} />}
                        fileName={`invoice-${invoiceData.invoiceNumber}.pdf`}
                        className="flex-1"
                      >
                        {({ loading: pdfLoading }) => (
                          <button
                            className={`w-full py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-sm ${
                              pdfLoading
                                ? 'bg-gray-700 cursor-wait'
                                : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25'
                            }`}
                          >
                            {pdfLoading ? (
                              <>
                                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Preparing PDF...
                              </>
                            ) : (
                              <>
                                <Download className="w-3 h-3" />
                                Download PDF
                              </>
                            )}
                          </button>
                        )}
                      </PDFDownloadLink>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center mb-6">
                      <FileText className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">No Invoice Generated Yet</h4>
                    <p className="text-gray-400 mb-6 text-sm px-4">
                      Describe your work or upload a receipt to see a live preview here.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        Real-time preview
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Vision AI
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx>{`
        body {
          overflow-x: hidden;
        }
        .max-w-7xl {
          max-width: 1280px;
        }
      `}</style>
    </div>
  );
};

export default Generator;