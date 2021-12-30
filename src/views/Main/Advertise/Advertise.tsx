import Image from 'next/image'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import AD_01 from 'assets/images/khumu_ads_01.png'
import AD_02 from 'assets/images/khumu_ads_02.png'
import AD_03 from 'assets/images/khumu_ads_03.png'
import { css } from '@emotion/react'
import { color } from '@src/constants/theme'

const Advertise = () => {
  const imgs = [AD_01, AD_02, AD_03]

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      swipeable={false}
      showIndicators={false}
      transitionTime={700}
      interval={5000}
      infiniteLoop
      autoPlay
    >
      {imgs.map((img) => (
        <div
          key={img.src}
          css={css`
            width: 100%;
            height: 25vw;
            min-height: 90px;
            background-color: ${color.gray5};
            margin-top: 24px;
          `}
        >
          <Image src={img.src} alt={img.src} layout="fill" objectFit="cover" />
        </div>
      ))}
    </Carousel>
  )
}

export default Advertise
