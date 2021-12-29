import { ChangeEventHandler, FC } from 'react'
import { Department as DepartmentType } from '@src/interface'

import * as s from './styled'

interface Props {
  current: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  departments?: DepartmentType[]
}

const Department: FC<Props> = ({ current, onChange, departments }) => (
  <s.Form>
    <s.FormTitle>학과</s.FormTitle>
    <s.Select value={current} name={'department'} onChange={onChange}>
      {departments?.map(({ name, id }) => (
        <option key={id}>{name}</option>
      ))}
    </s.Select>
  </s.Form>
)

export default Department
