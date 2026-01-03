import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FFFFFF',
    color: '#1a1a1a',
    fontFamily: 'Helvetica',
    position: 'relative',
  },
  
  // Background decorative elements
  backgroundAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    height: 200,
    backgroundColor: '#8B5CF6',
    opacity: 0.05,
    borderBottomLeftRadius: 100,
  },
  
  backgroundAccent2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 150,
    height: 150,
    backgroundColor: '#EC4899',
    opacity: 0.05,
    borderTopRightRadius: 100,
  },
  
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
    borderBottomStyle: 'solid',
  },
  
  brandContainer: {
    flexDirection: 'column',
  },
  
  brandTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    // REACT-PDF does not support text gradients. 
    // We must use a solid color here.
    color: '#8B5CF6', 
    marginBottom: 4,
  },
  
  tagline: {
    fontSize: 10,
    color: '#666',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  invoiceMeta: {
    alignItems: 'flex-end',
  },
  
  invoiceTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  
  metaContainer: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
    minWidth: 200,
  },
  
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  
  metaLabel: {
    fontSize: 9,
    color: '#666',
    fontWeight: 'medium',
  },
  
  metaValue: {
    fontSize: 9,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  
  // Parties section
  partiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  
  partyCard: {
    backgroundColor: '#F8FAFC',
    padding: 20,
    borderRadius: 12,
    width: '48%',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  
  partyTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  partyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  
  partyDetail: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
    lineHeight: 1.4,
  },
  
  // Table styles
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#8B5CF6',
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 20,
  },
  
  tableHeaderText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
    backgroundColor: 'white',
  },
  
  tableRowAlt: {
    backgroundColor: '#F8FAFC',
  },
  
  // Column widths
  colDesc: {
    width: '50%',
    fontSize: 10,
    color: '#1a1a1a',
  },
  
  colQty: {
    width: '15%',
    fontSize: 10,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  
  colRate: {
    width: '15%',
    fontSize: 10,
    textAlign: 'right',
    color: '#1a1a1a',
  },
  
  colTotal: {
    width: '20%',
    fontSize: 10,
    textAlign: 'right',
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  
  // Totals section
  totalsContainer: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  
  totalsWrapper: {
    width: '50%',
    backgroundColor: '#F8FAFC',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
  },
  
  totalLabel: {
    fontSize: 11,
    color: '#666',
  },
  
  totalValue: {
    fontSize: 11,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 2,
    borderTopColor: '#8B5CF6',
  },
  
  grandTotalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  
  grandTotalValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  
  // Notes section
  notesContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0EA5E9',
  },
  
  notesTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  
  notesText: {
    fontSize: 10,
    color: '#666',
    lineHeight: 1.5,
  },
  
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    borderTopStyle: 'solid',
  },
  
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  footerLogo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  
  footerText: {
    fontSize: 9,
    color: '#999',
    textAlign: 'center',
  },
  
  footerContact: {
    fontSize: 9,
    color: '#666',
    textAlign: 'right',
  },
  
  // Status badge
  statusBadge: {
    position: 'absolute',
    top: 40,
    right: 40,
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  
  statusText: {
    fontSize: 9,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  // Watermark
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: 48,
    color: '#8B5CF6',
    opacity: 0.05,
    fontWeight: 'bold',
  },
});

const InvoicePDF = ({ data }) => {
  // If no data is provided (initial load), return a blank page to prevent crash
  if (!data) return <Document><Page size="A4" style={styles.page}></Page></Document>;

  // Prepare safe data object with fallbacks
  // We use Number() to ensure math operations don't fail on strings
  const invoiceData = {
    invoiceNumber: data.invoiceNumber || `INV-${Date.now().toString().slice(-6)}`,
    date: data.date || new Date().toLocaleDateString(),
    dueDate: data.dueDate || new Date(Date.now() + 12096e5).toLocaleDateString(),
    currency: data.currency || '$',
    
    // Fallback for "From" Details
from: {
          name: "Abhijeet Rana", // <--- Updated Name
          email: "abhijeet4rana@gmail.com", // <--- Updated Email
          address: "New Delhi, 110049" // <--- Updated Address
        },

    // Fallback for "To" Details (Supports 'billedTo' or 'to')
    billedTo: {
      name: data.billedTo?.name || data.to?.name || "Client Name",
      email: data.billedTo?.email || data.to?.email || "client@email.com",
      address: data.billedTo?.address || data.to?.address || "Client Address",
      phone: data.billedTo?.phone || data.to?.phone || ""
    },

    items: data.items || [],
    subtotal: Number(data.subtotal || 0),
    taxPercent: Number(data.taxPercent || data.tax || 0),
    taxAmount: Number(data.taxAmount || 0),
    total: Number(data.total || 0),
    note: data.note || data.notes || "Thank you for your business!",
    status: data.status || "PAID" // Default status
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Background decorative elements */}
        <View style={styles.backgroundAccent} />
        <View style={styles.backgroundAccent2} />
        
        {/* Watermark */}
        <Text style={styles.watermark}>InvoiGen</Text>
        
        {/* Status Badge */}
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{invoiceData.status}</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <Text style={styles.brandTitle}>InvoiGen.</Text>
            <Text style={styles.tagline}>AI-Powered Invoice Generation</Text>
          </View>
          
          <View style={styles.invoiceMeta}>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <View style={styles.metaContainer}>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>INVOICE #</Text>
                <Text style={styles.metaValue}>{invoiceData.invoiceNumber}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>ISSUE DATE</Text>
                <Text style={styles.metaValue}>{invoiceData.date}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>DUE DATE</Text>
                <Text style={styles.metaValue}>{invoiceData.dueDate}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Parties */}
        <View style={styles.partiesContainer}>
          <View style={styles.partyCard}>
            <Text style={styles.partyTitle}>From</Text>
            <Text style={styles.partyName}>{invoiceData.from.name}</Text>
            <Text style={styles.partyDetail}>{invoiceData.from.address}</Text>
            <Text style={styles.partyDetail}>{invoiceData.from.email}</Text>
          </View>
          
          <View style={styles.partyCard}>
            <Text style={styles.partyTitle}>Bill To</Text>
            <Text style={styles.partyName}>{invoiceData.billedTo.name}</Text>
            <Text style={styles.partyDetail}>{invoiceData.billedTo.address}</Text>
            <Text style={styles.partyDetail}>{invoiceData.billedTo.email}</Text>
          </View>
        </View>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.colDesc]}>Description</Text>
          <Text style={[styles.tableHeaderText, styles.colQty]}>Qty</Text>
          <Text style={[styles.tableHeaderText, styles.colRate]}>Unit Price</Text>
          <Text style={[styles.tableHeaderText, styles.colTotal]}>Amount</Text>
        </View>

        {/* Table Rows */}
        {invoiceData.items.map((item, index) => (
          <View style={[styles.tableRow, index % 2 === 0 ? styles.tableRowAlt : {}]} key={index}>
            <Text style={styles.colDesc}>{item.description}</Text>
            <Text style={styles.colQty}>{item.quantity}</Text>
            <Text style={styles.colRate}>
              {invoiceData.currency}{Number(item.rate || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </Text>
            <Text style={styles.colTotal}>
              {invoiceData.currency}{Number(item.amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </Text>
          </View>
        ))}

        {/* Totals */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalsWrapper}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalValue}>
                {invoiceData.currency}{invoiceData.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </Text>
            </View>
            
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Tax ({invoiceData.taxPercent}%)</Text>
              <Text style={styles.totalValue}>
                {invoiceData.currency}{invoiceData.taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </Text>
            </View>
            
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total Amount</Text>
              <Text style={styles.grandTotalValue}>
                {invoiceData.currency}{invoiceData.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </Text>
            </View>
          </View>
        </View>

        {/* Notes */}
        <View style={styles.notesContainer}>
          <Text style={styles.notesTitle}>Notes</Text>
          <Text style={styles.notesText}>{invoiceData.note}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.footerLogo}>InvoiGen.</Text>
            <Text style={styles.footerText}>
              Generated with AI • InvoiGen.ai
            </Text>
            <Text style={styles.footerContact}>
              Page 1 of 1
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;