import * as s from './styled';

const SetNoti = ({ list, data }) => (
  <s.Container>
    {list.map((item) => (
      <s.SetItem>
        <s.Subject>{item.subject}</s.Subject>
        <s.Button isOn={data[item.key].is_activated}>
          {data[item.key].is_activated ? 'ON' : 'OFF'}
        </s.Button>
      </s.SetItem>
    ))}
  </s.Container>
);

export default SetNoti;
