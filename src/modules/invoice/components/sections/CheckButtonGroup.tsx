import CheckButton from "@/modules/shared/components/forms/CheckButton";

const items = [
  "14 days before due date",
  "7 days before due date",
  "3 days before due date",
  "24hrs before due date",
  "On the due date",
];

const CheckButtonGroup = () => {
  return (
    <div className="check-btn-group">
      <p className="mr-5">REMINDERS</p>
      {items.map((item: string, index) => (
        <CheckButton text={item} key={index} />
      ))}
    </div>
  );
};

export default CheckButtonGroup;
