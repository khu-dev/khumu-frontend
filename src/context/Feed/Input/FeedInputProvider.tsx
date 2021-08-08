import { FeedInputContext } from './FeedInputContext';
import { useSearchAreaFocus } from '@hooks/Main/useSearchAreaFocus';

const FeedInputProvider = ({ children }) => {
  const { focus, ...handler } = useSearchAreaFocus();

  return (
    <FeedInputContext.Provider value={{ focus, handler }}>
      {children}
    </FeedInputContext.Provider>
  );
};

export default FeedInputProvider;
