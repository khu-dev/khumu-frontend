import { FC, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import QRCode from 'qrcode'

import { color } from '@constants/theme'

import Refresh from './Refresh'

interface Props {
  qrcodeUrl: string
  handleRefresh(refresh?: boolean): void
}

const Image: FC<Props> = ({ qrcodeUrl, handleRefresh }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!qrcodeUrl) return

    QRCode.toCanvas(canvasRef.current, qrcodeUrl, (error) => {
      if (error) console.error(error)
    })
  }, [qrcodeUrl])

  return (
    <div>
      <Container>
        {qrcodeUrl ? <canvas ref={canvasRef} /> : <Empty />}
      </Container>
      <Refresh
        onRefresh={() => {
          if (!qrcodeUrl) return

          handleRefresh(true)
        }}
      />
    </div>
  )
}

export default Image

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 20px;
  background-color: ${color.white};
  overflow: hidden;
  margin-bottom: 24px;
`

const Empty = styled.div`
  background-color: ${color.gray5};
  width: 132px;
  height: 132px;
  border-radius: 20px;
`
