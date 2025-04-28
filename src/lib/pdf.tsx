// src/lib/pdf.ts
import html2pdf from 'html2pdf.js';

export const generatePDF = (elementId: string, filename: string) => {
  const handlePrint = () => {
    window.print();
  };
};
