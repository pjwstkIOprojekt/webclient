import { createContext, useContext, useState } from "react";

// Default notifications settings
const defaultContext = {
  notify: (title: string, content: string) => {},
  removeNotification: (x: Notification) => {},
  clear: () => {},
  renotify: (title: string, content: string) => {},
  notifications: [] as Notification[]
};

// Notifications hooks
const NotificationsContext = createContext(defaultContext);
export const useNotificationsManager = () => useContext(NotificationsContext);
export const useNotify = () => useNotificationsManager().notify;

// Helper types for notifications hooks
export interface Notification {
  title: string
  content: string
}

// Notifications hook provider component
export const NotificationsProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (title: string, content: string) => {
    if (!title || !content) {
      return;
    }

    setNotifications([...notifications, {
      title: title,
      content: content
    }]);
  };

  const renotify = (title: string, content: string) => {
    if (!title || !content) {
      return;
    }

    setNotifications([{
      title: title,
      content: content
    }]);
  };

  const unnotify = (x: Notification) => setNotifications(notifications.filter(n => n !== x));
  const clear = () => setNotifications([]);

  return (
    <NotificationsContext.Provider value={{
      notify: notify,
      removeNotification: unnotify,
      clear: clear,
      renotify: renotify,
      notifications: notifications
    }}>
      {props.children}
    </NotificationsContext.Provider>
  );
};
