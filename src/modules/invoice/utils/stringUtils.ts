export const inoviceBadgeColor = (title: string) => {
  const transformedTitle = title.toLowerCase();
  let color;

  if (transformedTitle.includes("paid")) {
    color = "#B6FDD3";
  }

  if (transformedTitle.includes("overdue")) {
    color = "#FFB7BD";
  }

  if (transformedTitle.includes("draft")) {
    color = "#D9D9E0";
  }

  if (transformedTitle.includes("unpaid")) {
    color = "#F8E39B";
  }

  return color;
};

// generates recent invoices badge colors based on the invoice status
export const getStatusColor = (status: string): string => {
  const statusClasses: Record<string, string> = {
    paid: "bg-[#E6FFF0] border border-[#12904333] !text-[#129043] !px-3",

    overdue: "bg-[#FFF4F5] border border-[#FF566333] !text-[#FF5663]",

    draft: "bg-[#F6F8FA] border border-[#373B4733] !text-[#373B47]",

    "pending payment": "bg-[#FFF8EB] border border-[#D98F0033] !text-[#D98F00]",

    "partial payment": "bg-[#F2FBFF] border border-[#003EFF33] !text-[#003EFF]",
  };

  return statusClasses[status.toLowerCase()] || "";
};
