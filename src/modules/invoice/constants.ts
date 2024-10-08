import type {
  InvoiceActionData,
  SummaryData,
  Invoice,
  ActivityData,
} from "./index";

export const invoiceSummaryData: SummaryData[] = [
  {
    title: "Total Paid",
    badgeCount: 1289,
    amount: "4120102.76",
  },
  {
    title: "Total Overdue",
    badgeCount: 13,
    amount: "23000.13",
  },
  {
    title: "Total Draft",
    badgeCount: 8,
    amount: "12200.00",
  },
  {
    title: "Total Unpaid",
    badgeCount: 6,
    amount: "87102.00",
  },
];

export const invoiceActionData: InvoiceActionData[] = [
  {
    icon: "/assets/icons/invoice/money.svg", // Replace with the actual path to the money icon
    title: "Create New Invoice",
    description: "Create new invoices easily",
  },
  {
    icon: "/assets/icons/invoice/settings.svg", // Replace with the actual path to the settings icon
    title: "Change Invoice settings",
    description: "Customise your invoices",
  },
  {
    icon: "/assets/icons/invoice/personnel.svg", // Replace with the actual path to the customer icon
    title: "Manage Customer list",
    description: "Add and remove customers",
  },
];

// Sample data (replace this with actual prop data)
export const invoiceData: { [key: string]: Invoice[] } = {
  "27th November, 2022": [
    {
      invoiceNumber: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
    },
    {
      invoiceNumber: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Overdue",
    },
  ],
  "8th December, 2022": [
    {
      invoiceNumber: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Draft",
    },
    {
      invoiceNumber: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Pending Payment",
    },
    {
      invoiceNumber: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
    },
  ],
};

export const recentActivities: ActivityData[] = [
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Yesterday, 12:05 PM",
    action: "Created invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Yesterday, 12:05 PM",
    action: "Created invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Yesterday, 12:05 PM",
    action: "Created invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Yesterday, 12:05 PM",
    action: "Created invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
];

export const invoiceItems = [
  {
    title: "Email Marketing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    quantity: 10,
    unitPrice: "$1,500",
    totalPrice: "$15,000.00",
  },
  {
    title: "Video looping effect",
    quantity: 6,
    unitPrice: "$1,110,500",
    totalPrice: "$6,663,000.00",
  },
  {
    title: "Graphic design for emails",
    description: "Tsit voluptatem accusantium",
    quantity: 7,
    unitPrice: "$2,750",
    totalPrice: "$19,250.00",
  },
  {
    title: "Video looping effect",
    quantity: 6,
    unitPrice: "$1,110,500",
    totalPrice: "$6,663,000.00",
  },
];

export const paymentData = [
  { label: 'ACCOUNT NAME', value: '1023902390' },
  { label: 'ACCOUNT NUMBER', value: 'March 30th, 2023' },
  { label: 'ACH ROUTING NO', value: 'May 19th, 2023' },
  { label: 'BANK NAME', value: 'USD ($)' },
  { label: 'BANK ADDRESS', value: '1023902390' },
  { label: 'ACCOUNT NUMBER', value: 'March 30th, 2023' },
];



export const invoiceActivities: ActivityData[] = [
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Today, 12:20 PM",
    action: "Created invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Today, 12:20 PM",
    action: "Sent invoice",
    description: "00239434/Olaniyi Ojo Adewale",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Today, 12:20 PM",
    action: "You manually confirmed a partial payment of",
    description: "$503,000.00",
  },{
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Today, 12:20 PM",
    action: "You manually confirmed a full payment of",
    description: "$6,000,000.00",
  },
  {
    picture: "/assets/images/avatar.svg",
    title: "Invoice creation",
    timeStamp: "Today, 12:20 PM",
    action: "Sent invoices",
    description: "00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
  },
];
