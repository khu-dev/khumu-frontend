import { SettingKind } from '@enum/Notification'

export interface NotificationOptionsDetail {
  created_at: string
  id: number
  is_activated: boolean
  push_option_kind: string
  username: string
}

export interface NotificationOptions {
  khumu_notification: NotificationOptionsDetail
  khumu_service_notification: NotificationOptionsDetail
  new_announcement_of_following_author: NotificationOptionsDetail
  new_hot_article: NotificationOptionsDetail
}

export interface Notification {
  content: string
  created_at: string
  id: number
  is_read: boolean
  kind: string
  recipient: string
  reference: string
  title: string
}

interface SettingItem {
  key: SettingKind
  label: string
}

interface UpdateRequest {
  id: number
  status: boolean
}

interface Response {
  id: number
  is_activated: boolean
  push_option_kind: SettingKind
}

interface SettingResponse {
  [SettingKind.ANNOUNCEMENT_CRAWLED]: Response
  [SettingKind.HAKSA_SCHEDULE]: Response
  [SettingKind.KHUMU_NOTIFICATION]: Response
  [SettingKind.KHUMU_SERVICE_NOTIFICATION]: Response
  [SettingKind.NEW_HOT_ARTICLE]: Response
}

export { SettingItem, SettingResponse, UpdateRequest }
