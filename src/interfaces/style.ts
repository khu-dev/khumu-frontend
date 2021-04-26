import { InitProps } from './components';

interface ItemStyleType {
  height?: string;
  backgroundColor?: string;
  selected?: string;
  show?: boolean;
  init?: InitProps;
  isAdvertise?: boolean;
  minHeight?: string;
}

interface HeaderStyleType {
  isMain?: boolean;
}

interface TitleStyleType {
  color?: string;
  isLoading?: boolean;
}

interface ContentStyleType {
  flexDirection?: string;
}

export interface StyleType
  extends ItemStyleType,
    HeaderStyleType,
    TitleStyleType,
    ContentStyleType {}

// export type StyleType = ItemStyleType | HeaderStyleType | TitleStyleType;
