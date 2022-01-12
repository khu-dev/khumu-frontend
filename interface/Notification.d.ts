import { SettingKind } from '@enum/Notification'

export interface OptionDetail {
  created_at: string
  id: number
  is_activated: boolean
  push_option_kind: string
  username: string
}

export interface Options {
  khumu_notification: OptionDetail
  khumu_service_notification: OptionDetail
  new_announcement_of_following_author: OptionDetail
  new_hot_article: OptionDetail
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
  link?: string
}

interface SettingItem {
  key: SettingKind
  label: string
}

type ReadRequest = 'all' | number

interface UpdateRequest {
  id: number
  status: boolean
}

interface SettingResponse {
  [SettingKind.ANNOUNCEMENT_CRAWLED]: OptionDetail
  [SettingKind.HAKSA_SCHEDULE]: OptionDetail
  [SettingKind.KHUMU_NOTIFICATION]: OptionDetail
  [SettingKind.KHUMU_SERVICE_NOTIFICATION]: OptionDetail
  [SettingKind.NEW_HOT_ARTICLE]: OptionDetail
}

export { SettingItem, SettingResponse, ReadRequest, UpdateRequest }
