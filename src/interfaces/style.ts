import { InitProps } from './components';

type ItemStyleType = {
  height?: string;
  backgroundColor?: string;
  selected?: string;
  show?: boolean;
  init?: InitProps;
  isAdvertise?: boolean;
  minHeight?: string;
};

type HeaderStyleType = {
  isMain?: boolean;
};

type TitleStyleType = {
  color?: string;
  isLoading?: boolean;
};

type ContentStyleType = {
  flexDirection?: string;
};

export interface StyleType
  extends ItemStyleType,
    HeaderStyleType,
    TitleStyleType,
    ContentStyleType {}

// export type StyleType = ItemStyleType | HeaderStyleType | TitleStyleType;
