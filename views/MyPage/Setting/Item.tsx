import { useState, useEffect, FC } from 'react'

import { SettingItem, SettingResponse } from '@interface/Notification'

import * as s from './styled'

interface Props {
  item: SettingItem
  data: SettingResponse
  updateSetting(id: number, status: boolean, setActive: Function): void
}

const Item: FC<Props> = ({ item, data, updateSetting }) => {
  const [isActive, setActive] = useState<boolean>(data[item.key]?.is_activated)
  const id = data[item.key]?.id

  useEffect(() => {
    if (!data) return

    setActive(data[item.key]?.is_activated)
  }, [data, item.key])

  return (
    <s.SetItem>
      <s.Subject>{item.label}</s.Subject>
      <s.Button
        isOn={isActive}
        onClick={() => updateSetting(id, isActive, setActive)}
      >
        {isActive ? 'ON' : 'OFF'}
      </s.Button>
    </s.SetItem>
  )
}

export default Item
