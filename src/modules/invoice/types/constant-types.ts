export interface SummaryData {
    title: string;
    badgeCount: number;
    amount: string;
  }
  
  export interface InvoiceActionData {
    icon: string;
    title: string;
    description: string;
  }

  export interface Invoice {
    invoiceNumber: string;
    dueDate: string;
    amount: string;
    status: string;
  }