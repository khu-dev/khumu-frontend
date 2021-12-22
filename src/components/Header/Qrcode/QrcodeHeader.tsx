//@ts-nocheck

import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { css } from '@emotion/react'

import { color } from '@constants/theme'
import LinkIcon from '@components/Link'
import { Title02 } from '@components/Title'
import { useRouter } from 'next/router'

export default function QrcodeHeader({ title }: { title: string }) {
  const csses = useStyles()
  const { back } = useRouter()

  return (
    <div className={'header header-align-center'}>
      <LinkIcon pathname="" onClick={() => back()}>
        <IoChevronBackOutline css={csses.icon} />
      </LinkIcon>
      <Title02 css={csses.title}>{title}</Title02>
    </div>
  )
}

function useStyles() {
  return {
    icon: css`
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: ${color.gray4};
      font-size: 28px;
    `,
    title: css`
      color: ${color.main};
    `,
  }
}
