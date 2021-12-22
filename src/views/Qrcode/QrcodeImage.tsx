import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import QRCode from 'qrcode'

import { color } from '@constants/theme'

export default function QrcodeImage({ qrcode }: { qrcode: string }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    qrcode &&
      QRCode.toCanvas(canvasRef.current, qrcode, (error) => {
        if (error) console.error(error)
      })
  }, [qrcode])

  if (!qrcode)
    return (
      <Container>
        <Empty />
      </Container>
    )

  return (
    <Container>
      <Canvas ref={canvasRef} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 230px;
  border-radius: 20px;
  background-color: ${color.white};
  overflow: hidden;
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  transform: scale(1.8);
`

const Empty = styled.div`
  background-color: ${color.gray5};
  width: 190px;
  height: 190px;
  border-radius: 20px;
`
