import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import AD_01 from 'assets/images/khumu_ads_01.png'
import AD_02 from 'assets/images/khumu_ads_02.png'
import AD_03 from 'assets/images/khumu_ads_03.png'
import { css } from '@emotion/react'
import { useLoading } from '@context/Loading'

const Advertise = () => {
  const { isLoading } = useLoading()
  const imgs = [AD_01, AD_02, AD_03]

  return !isLoading ? (
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
        <img
          key={img.src}
          src={img.src}
          alt={img.src}
          css={css`
            width: 100%;
            max-height: 120px;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 24px;
            object-fit: contain;
          `}
        />
      ))}
    </Carousel>
  ) : null
}

export default Advertise
