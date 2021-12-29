import { ReactNode } from 'react'
import Button from './Button'
import Department from './Department'
import Image from './Image'
import Nickname from './Nickname'
import StudentNumber from './StudentNumber'

import * as s from './styled'

interface Props {
  children: ReactNode
}

const Edit = ({ children }: Props) => <s.Container>{children}</s.Container>

Edit.Image = Image
Edit.Nickname = Nickname
Edit.StudentNumber = StudentNumber
Edit.Department = Department
Edit.Button = Button

export default Edit
