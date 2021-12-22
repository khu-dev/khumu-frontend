//@ts-nocheck

import { useState, useEffect } from 'react'
import * as s from './styled'

const Item = ({ item, data, updateSetting }) => {
  const [isActive, setActive] = useState<boolean>(data[item.key]?.is_activated)
  const id = data[item.key]?.id

  useEffect(() => {
    data && setActive(data[item.key]?.is_activated)
  }, [data])

  return (
    <s.SetItem>
      <s.Subject>{item.subject}</s.Subject>
      <s.Button
        isOn={isActive}
        onClick={() => updateSetting(id, isActive, setActive)}
      >
        {isActive ? 'ON' : 'OFF'}
      </s.Button>
    </s.SetItem>
  )
}

const SetNoti = ({ list, data, updateSetting }) => (
  <s.Container>
    {list.map((item) => (
      <Item
        key={item.key}
        item={item}
        data={data}
        updateSetting={updateSetting}
      />
    ))}
  </s.Container>
)

export default SetNoti
