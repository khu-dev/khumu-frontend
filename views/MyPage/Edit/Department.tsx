import { FC } from 'react'

import useDepartments from '@hooks/useDepartments'

import * as s from './styled'

interface Props {
  value: string
  onChange(name: string, value: string): void
}

const Department: FC<Props> = ({ value, onChange }) => {
  const departments = useDepartments()

  return (
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
}

export default Department
