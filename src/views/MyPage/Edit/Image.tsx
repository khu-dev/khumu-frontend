import React, { ChangeEvent, FC, useRef } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

import { FileApi } from '@src/api'
import { color } from '@constants/theme'
import { AndroidToast } from '@src/utils/android'

import * as s from './styled'

const MAX_SIZE = 3

interface Props {
  handleImageName(name: string): void
}

const Image: FC<Props> = ({ handleImageName }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const beforeUpload = (file: File) => {
    const isValidSize = file.size / 1024 / 1024 < MAX_SIZE
    if (!isValidSize) {
      AndroidToast(`이미지 크기는 ${MAX_SIZE}MB로 제한됩니다`)
    }
    return isValidSize
  }

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      AndroidToast('파일이 존재하지 않습니다')
      return
    }

    const isValidFile = beforeUpload(file)

    if (!isValidFile) return

    const formData = new FormData()

    formData.append('data', file)

    FileApi.upload(formData)
      .then(({ data }) => {
        handleImageName(data)
      })
      .catch(() => {
        AndroidToast('업로드에 실패하였습니다')
      })
  }

  const onClickUpload = () => {
    inputRef.current?.click()
  }

  return (
    <s.Image onClick={onClickUpload}>
      <AiOutlineUser onClick={onClickUpload} color={color.white} size={60} />
      <s.Uploader
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={upload}
      />
    </s.Image>
  )
}

export default Image
