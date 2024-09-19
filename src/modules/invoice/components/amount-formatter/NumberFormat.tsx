import "./amount-formatter.scss";

interface NumberFormatType {
  amount: string;
}

const NumberFormat: React.FC<NumberFormatType> = ({ amount }) => {
  const stringValue = amount.toString();
  const [integerPart, decimalPart] = stringValue.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div>
      <span className="integer">${formattedInteger}</span>.
      <span className="decimal">{decimalPart}</span>
    </div>
  );
};

export default NumberFormat;
