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
};

export type StyleType = ItemStyleType | HeaderStyleType;
