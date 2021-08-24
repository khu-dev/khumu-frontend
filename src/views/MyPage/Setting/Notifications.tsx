import * as s from './styled';

const SetNoti = ({ list }) => (
  <s.Container>
    {list.map((item) => (
      <s.SetItem>
        <s.Subject>{item.subject}</s.Subject>
        <s.Button isOn={item.isOn}>{item.isOn ? 'ON' : 'OFF'}</s.Button>
      </s.SetItem>
    ))}
  </s.Container>
);

export default SetNoti;
