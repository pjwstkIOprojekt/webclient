import { Notification as Notif, useNotificationsManager } from "../../../hooks/useNotify";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Toast } from "react-bootstrap";

export interface NotificationParams {
  notif: Notif
}

const Notification = (props: Readonly<NotificationParams>) => {
  const notifManager = useNotificationsManager();
  const darkMode = useDarkMode();

  return (
    <Toast show onClose={e => notifManager.removeNotification(props.notif)} bg={darkMode ? "dark" : "light"}>
      <Toast.Header className={`toast-header-custom-${darkMode ? "dark" : "light"}`} closeVariant={darkMode ? "white" : undefined}>
        <strong className="me-auto">{props.notif.title}</strong>
      </Toast.Header>
      <Toast.Body>{props.notif.content}</Toast.Body>
    </Toast>
  );
};

export default Notification;
