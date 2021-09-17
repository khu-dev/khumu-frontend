export interface NotificationOptionsDetail {
  created_at: string;
  id: number;
  is_activated: boolean;
  push_option_kind: string;
  username: string;
}

export interface NotificationOptions {
  khumu_notification: NotificationOptionsDetail;
  khumu_service_notification: NotificationOptionsDetail;
  new_announcement_of_following_author: NotificationOptionsDetail;
  new_hot_article: NotificationOptionsDetail;
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
