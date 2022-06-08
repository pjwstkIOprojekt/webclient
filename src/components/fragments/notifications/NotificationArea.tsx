import { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Notification from "./Notification";

const NotificationArea = () => {
  const [notificationList, setNotificationList] = useState([{id: 1}, {id: 2}, {id: 3}]);

  return (
    <div aria-live="polite" aria-atomic="true">
      <ToastContainer className="position-fixed bottom-0 end-0 p-3">
        {notificationList.map((notification, index) => (
          <Notification key={index} />
        ))}
      </ToastContainer>
    </div>
  );
};

export default NotificationArea;
