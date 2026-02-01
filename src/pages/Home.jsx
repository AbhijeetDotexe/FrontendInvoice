import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, ShieldCheck, Sparkles, CheckCircle, TrendingUp, Users, Globe, FileText, Clock, CreditCard } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Animated Background Particles */}
      <ParticlesBackground />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-3xl rotate-12 animate-float" />
      <div className="absolute bottom-40 left-20 w-48 h-48 border border-white/5 rounded-2xl -rotate-12 animate-float-delayed" />

      {/* Navbar */}
      <motion.nav 
        className="flex justify-between items-center px-8 py-6 z-50 relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Invoicegen
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* <Link to="/login">
            <motion.button 
              className="px-6 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </Link> */}
          <Link to="/generate">
            <motion.button 
              className="px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">AI-Powered Invoice Generation</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Stop Typing,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Start Creating.
              </span>
            </motion.h1>

            <motion.p 
              className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your workflow with AI that understands context, rates, and tax logic. 
              Generate professional invoices in seconds, not hours.
            </motion.p>

            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/generate" className="group">
                <motion.button 
                  className="relative px-10 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 shadow-xl shadow-purple-500/30 flex items-center gap-3 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Sparkles className="w-5 h-5" />
                  Generate Invoice Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <motion.button 
                className="px-10 py-4 rounded-2xl text-lg font-semibold bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <StatCard icon={<Users />} number="10K+" label="Happy Users" />
              <StatCard icon={<FileText />} number="50K+" label="Invoices Generated" />
              <StatCard icon={<Clock />} number="99.9%" label="Uptime" />
              <StatCard icon={<Globe />} number="50+" label="Countries" />
            </motion.div>
          </div>

          {/* Preview Section */}
          <motion.div 
            className="mt-32 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80" 
                  alt="Invoice Preview" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose Invoicegen?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="w-8 h-8" />}
                title="Lightning Fast"
                description="Generate professional invoices in under 30 seconds with our AI-powered system."
                gradient="from-yellow-500/20 to-orange-500/20"
                iconColor="text-yellow-400"
              />
              <FeatureCard 
                icon={<Brain className="w-8 h-8" />}
                title="AI Smart"
                description="Context-aware AI that understands your business and suggests optimal pricing."
                gradient="from-purple-500/20 to-pink-500/20"
                iconColor="text-purple-400"
              />
              <FeatureCard 
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Tax Compliant"
                description="Automatically calculates taxes based on your location and business type."
                gradient="from-green-500/20 to-cyan-500/20"
                iconColor="text-green-400"
              />
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-32 text-center rounded-3xl p-12 relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10 animate-gradient" />
            
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Invoicing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who save hours every week with Invoicegen.
            </p>
            
            <Link to="/generate">
              <motion.button 
                className="group relative px-12 py-5 rounded-2xl text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Start Free Trial • No Credit Card Required
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 py-8 px-4 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>© 2026 Invoicegen. All rights reserved.</p>
      </footer>
    </div>
  );
};

const ParticlesBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] h-[1px] bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const StatCard = ({ icon, number, label }) => (
  <motion.div 
    className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
      {icon}
    </div>
    <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-sm text-gray-400 mt-2">{label}</div>
  </motion.div>
);

const FeatureCard = ({ icon, title, description, gradient, iconColor }) => (
  <motion.div 
    className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm hover:from-white/10 transition-all duration-300 group"
    whileHover={{ y: -10, scale: 1.02 }}
  >
    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <div className={iconColor}>
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
      <CheckCircle className="w-4 h-4" />
      <span>Learn more</span>
    </div>
  </motion.div>
);

// Add these keyframes to your global CSS or in your Tailwind config
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(12deg); }
    50% { transform: translateY(-20px) rotate(12deg); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(-30px) rotate(-12deg); }
  }
  
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
`;

// Add this style tag to your component or in your global CSS
<style>{styles}</style>

export default Home;