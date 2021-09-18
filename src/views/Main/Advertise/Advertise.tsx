import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { AdItem } from './styled';
import { getRandomRGBA } from '@src/utils/color';

const Item = ({ content }) => (
  <AdItem bgColor={getRandomRGBA({ a: 0.8 })}>{content}</AdItem>
);

const Advertise = () => (
  <Carousel
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    infiniteLoop
    autoPlay
  >
    {['1', '2', '3', '4'].map((content) => (
      <Item key={content} content={content} />
    ))}
  </Carousel>
);

export default Advertise;
