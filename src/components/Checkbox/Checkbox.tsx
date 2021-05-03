/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { css } from '@emotion/react';

const CheckboxStyle = css`
  width: 13px;
  height: 13px;
  margin-right: 12px;
`;

const Checkbox = forwardRef<HTMLInputElement>(function Checkbox(props, ref) {
  return <input css={CheckboxStyle} type="checkbox" ref={ref} {...props} />;
});

export default Checkbox;
