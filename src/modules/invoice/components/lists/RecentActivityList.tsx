import { ActivityData } from "../../index";

interface ActivityProps {
  activities: ActivityData[];
}

const RecentActivityList: React.FC<ActivityProps> = ({ activities }) => {
  return (
    <>
      {activities.map(
        ({ picture, title, timeStamp, action, description }, index) => (
          <div key={index} className="activity mb-6">
            <div className="image">
              <img src={picture} alt={title} />
              <div className="vertical-line"></div>
            </div>
            <div className="activity-details pl-4">
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
