import { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Notification from "./Notification";



const NotificationArea = () => {
  const [notificationList, setNotificationList] = useState([{id: 1}, {id: 2}, {id: 3}]);

  return (
    <div aria-live="polite" aria-atomic="true">
      <ToastContainer position="bottom-end" className="p-3">
        {notificationList.map(notification => (
          <Notification />
        ))}
      </ToastContainer>
    </div>
  );
};

export default NotificationArea;
