import { forwardRef } from 'react';
import { css } from '@emotion/react';

const Checkbox = forwardRef<HTMLInputElement>(function Checkbox(props, ref) {
  return (
    <input
      css={css`
        width: 13px;
        height: 13px;
        margin-right: 12px;
      `}
      type="checkbox"
      ref={ref}
      {...props}
    />
  );
});

export default Checkbox;
