import { ActivityData } from "../../index";

interface ActivityProps {
  activities: ActivityData[];
  isInvoiceActivity?: boolean;
}

const RecentActivityList: React.FC<ActivityProps> = ({
  activities,
  isInvoiceActivity = false,
}) => {
  return (
    <>
      {activities.map(
        ({ picture, title, timeStamp, action, description }, index) => (
          <div key={index} className="activity">
            <div className="image">
              <img src={picture} alt={title} />

              {isInvoiceActivity && (
                <div
                  className={
                    activities.length > index + 1 ? "vertical-line" : ""
                  }
                ></div>
              )}
            </div>
            <div className="activity-details pl-4 pb-6">
              <p className="title">{title}</p>
              <p className="time-stamp my-1">{timeStamp}</p>
              <p className="description">
                <span>{action}</span> {description}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default RecentActivityList;
