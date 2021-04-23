import { InitProps } from './components';

type ItemStyleType = {
  height?: string;
  backgroundColor?: string;
  selected?: string;
  show?: boolean;
  init?: InitProps;
};

type HeaderStyleType = {
  isMain?: boolean;
};

type TitleStyleType = {
  color?: string;
  isLoading?: boolean;
};

export type StyleType = ItemStyleType | HeaderStyleType | TitleStyleType;
