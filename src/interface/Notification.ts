export interface NotificationOptions {
  created_at: string;
  id: number;
  is_activated: boolean;
  push_option_kind: string;
  username: string;
}

export interface Notification {
  content: string;
  created_at: string;
  id: number;
  is_read: boolean;
  kind: string;
  recipient: string;
  reference: string;
  title: string;
}
