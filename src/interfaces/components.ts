export interface InitProps {
  isInit: boolean;
  idx: number;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  init?: InitProps;
  height?: string;
  isAdvertise?: boolean;
}

export interface FeedPropsType {
  isMain: boolean;
  selected: string;
  onTabClick: (e: React.MouseEvent<HTMLElement>) => void;
}
