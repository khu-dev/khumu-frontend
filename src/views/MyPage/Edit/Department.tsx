import { FC } from 'react'
import { Department as DepartmentType } from '@src/interface'

import * as s from './styled'

interface Props {
  value: string
  onChange(name: string, value: string): void
  departments?: DepartmentType[]
}

const Department: FC<Props> = ({ value, onChange, departments }) => (
  <s.Form>
    <s.FormTitle>학과</s.FormTitle>
    <s.Select
      name="department"
      onChange={(e) => {
        const { name, value } = e.target
        onChange(name, value)
      }}
      value={value}
    >
      {departments?.map(({ name, id }) => (
        <option key={id}>{name}</option>
      ))}
    </s.Select>
  </s.Form>
)

export default Department
