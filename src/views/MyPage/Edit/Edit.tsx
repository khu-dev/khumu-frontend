import React, { ChangeEvent } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { color } from '@constants/theme';

import * as s from './styled';
import { AndroidToast } from '@src/utils/android';
import { uploadImage } from '@src/api';

const MAX_SIZE = 3;

const Image = ({ handleImageName }) => {
  const beforeUpload = (file: File) => {
    const isValidSize = file.size / 1024 / 1024 < MAX_SIZE;
    if (!isValidSize) {
      AndroidToast(`이미지 크기는 ${MAX_SIZE}MB로 제한됩니다`);
    }
    return isValidSize;
  };

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const isValidFile = beforeUpload(file);

    if (!isValidFile) return;

    const formData = new FormData();

    formData.append('data', file);

    uploadImage
      .post(formData)
      .then(({ data }) => {
        handleImageName(data);
      })
      .catch(() => {
        AndroidToast('업로드에 실패하였습니다');
      });
  };

  return (
    <s.Image>
      <AiOutlineUser color={color.white} size={60} />
      <s.Uploader type="file" accept="image/*" onChange={upload} />
    </s.Image>
  );
};

const Nickname = ({ nickname, onChange }) => (
  <s.Form>
    <s.FormTitle>닉네임</s.FormTitle>
    <s.Input placeholder={nickname} onChange={onChange} name={'nickname'} />
  </s.Form>
);

const StudentNumber = ({ studentNumber }) => (
  <s.Form>
    <s.FormTitle>학번</s.FormTitle>
    <s.Input placeholder={studentNumber} name={'studentNumber'} disabled />
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
Edit.StudentNumber = StudentNumber;
Edit.Department = Department;
Edit.Button = Button;

export default Edit;
