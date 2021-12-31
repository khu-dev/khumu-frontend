import { SettingKind } from '@enum/Notification'

const kindToLabel = {
  [SettingKind.ANNOUNCEMENT_CRAWLED]: '팔로우 중인 공지사항',
  [SettingKind.HAKSA_SCHEDULE]: '학사 일정',
  [SettingKind.KHUMU_NOTIFICATION]: '학교 소식 알림',
  [SettingKind.KHUMU_SERVICE_NOTIFICATION]: '쿠뮤 공지 알림',
  [SettingKind.NEW_HOT_ARTICLE]: '핫 게시글 알림',
}

export { kindToLabel }
