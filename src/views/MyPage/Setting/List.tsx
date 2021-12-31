import { FC } from 'react'

import { SettingItem, SettingResponse } from '@src/interface'

import Item from './Item'
import * as s from './styled'

interface Props {
  list: SettingItem[]
  data: SettingResponse | null
  updateSetting(id: number, status: boolean, setActive: Function): void
}

const List: FC<Props> = ({ list, data, updateSetting }) => (
  <s.Container>
    {data &&
      list.map((item) => (
        <Item
          key={item.key}
          item={item}
          data={data}
          updateSetting={updateSetting}
        />
      ))}
  </s.Container>
)

export default List
