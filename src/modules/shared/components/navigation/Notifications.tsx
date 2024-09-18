import { Button } from "../../index";
import "./navigation.scss";

const Notifications = () => {
  return (
    <Button variant="rounded" className="notifications">
      <img src="/assets/icons/bell.svg" alt="" />
    </Button>
  );
};

export default Notifications;
