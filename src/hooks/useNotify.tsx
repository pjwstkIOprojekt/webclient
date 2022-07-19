import { createContext, useContext, useState } from "react";

// Default notifications settings
const defaultContext = {
  notify: (title: string, content: string) => {},
  removeNotification: (x: Notification) => {},
  clear: () => {},
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

    const notifs = [...notifications, { title: title, content: content }];
    setNotifications(notifs);
  };

  const unnotify = (x: Notification) => {
    const notifs = notifications.filter(n => n !== x);
    setNotifications(notifs);
  };

  const clear = () => {
    setNotifications([]);
  };

  return (
    <NotificationsContext.Provider value={{
      notify: notify,
      removeNotification: unnotify,
      clear: clear,
      notifications: notifications
    }}>
      {props.children}
    </NotificationsContext.Provider>
  );
};
