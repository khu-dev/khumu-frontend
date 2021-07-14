import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

const SkeletonNotifications = () => (
  <Container>
    <Icon />
    <Content>
      <Row />
      <Row />
      <Row />
    </Content>
  </Container>
);

export default SkeletonNotifications;

const Container = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

const Icon = styled.div`
  display: inline-block;
  width: calc(72px - 28px);
  height: ${box.marginWidth};
  margin: ${box.margin};
  background-color: ${color.gray6};
`;

const Content = styled.div`
  display: inline-block;
  flex-grow: 1;
  max-width: 320px;
  height: ${box.marginWidth};
  margin: ${box.margin};
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const Row = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${color.gray6};
`;
