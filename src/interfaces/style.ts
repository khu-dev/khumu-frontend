type ItemStyleType = {
  height?: string;
  backgroundColor?: string;
  selected?: string;
};

type HeaderStyleType = {
  isMain?: boolean;
};

type TitleStyleType = {
  color?: string;
  isLoading?: boolean;
};

export type StyleType = ItemStyleType | HeaderStyleType | TitleStyleType;
