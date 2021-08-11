import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { color } from '@constants/theme';

import * as s from './styled';

const Image = () => (
  <s.Image>
    <AiOutlineUser color={color.white} size={60} />
  </s.Image>
);

const Nickname = ({ nickname, onChange }) => (
  <s.Form>
    <s.FormTitle>닉네임</s.FormTitle>
    <s.Input placeholder={nickname} onChange={onChange} name={'nickname'} />
  </s.Form>
);

const Department = ({ current, onChange, departments }) => (
  <s.Form>
    <s.FormTitle>학과</s.FormTitle>
    <s.Select value={current} onChange={onChange} name={'department'}>
      {departments.map(({ name, id }) => (
        <option key={id}>{name}</option>
      ))}
    </s.Select>
  </s.Form>
);

const Button = ({ onClick }) => <s.Button onClick={onClick}>완료</s.Button>;

const Edit = ({ children }) => <s.Container>{children}</s.Container>;

Edit.Image = Image;
Edit.Nickname = Nickname;
Edit.Department = Department;
Edit.Button = Button;

export default Edit;
