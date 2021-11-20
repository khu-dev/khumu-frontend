import router from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { fetchUsers } from '@src/api';
import { MyBox, MyRow, MyTitle } from '../Shared';
import { AndroidToast } from '@src/utils/android';
import Modal from '@src/components/Modal';
import * as s from './styled';
import { ResignButton } from '@src/enum/ResignButton';

const Etc = () => {
  const [isModal, setModal] = useState(false);

  const handleModal = (nextState: boolean) => {
    setModal((prevState) => (nextState === undefined ? !prevState : nextState));
  };

  const handleResign = async () => {
    const result = await fetchUsers.delete();

    if (result.status === 204) {
      AndroidToast('탈퇴되었습니다');
      router.push('/logout');
    }
  };

  return (
    <MyBox>
      <MyTitle title={'기타'} />
      <MyRow>{'정보 동의 설정'}</MyRow>
      <MyRow
        onClick={() => {
          handleModal(true);
        }}
      >
        {'회원 탈퇴'}
      </MyRow>
      <Link href="/logout">
        <a>
          <MyRow>{'로그아웃'}</MyRow>
        </a>
      </Link>
      <Modal isActive={isModal} handleCancel={() => handleModal(false)}>
        <s.ResignTitle>정말 탈퇴하시겠어요?</s.ResignTitle>
        <s.ResignSummary>
          더이상 학사 일정 관련 소식들을 받아볼 수 없어요
        </s.ResignSummary>
        <s.ResignSummary>
          지금까지 활동했던 모든 기록들은 탈퇴 시점으로부터 6개월 동안 남아있어요
        </s.ResignSummary>
        <s.ResignSummary>
          탈퇴를 하신 후 언제든지 재가입을 진행하실 수 있어요 <br />
          (6개월 이내 재가입의 경우 활동하신 기록을 그대로 사용하실 수 있어요)
        </s.ResignSummary>
        <s.ResignButtonContainer>
          <s.Button
            title={'탈퇴하기'}
            onClick={() => {
              handleModal(false);
              handleResign();
            }}
            type={ResignButton.CONFIRM}
          >
            탈퇴하기
          </s.Button>
          <s.Button
            title={'취소하기'}
            onClick={() => handleModal(false)}
            type={ResignButton.CANCEL}
          >
            취소하기
          </s.Button>
        </s.ResignButtonContainer>
      </Modal>
    </MyBox>
  );
};

export default Etc;
