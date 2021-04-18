type ItemStyleType = {
  height?: string;
  backgroundColor?: string;
};

type HeaderStyleType = {
  isMain?: boolean;
};

export type StyleType = ItemStyleType | HeaderStyleType;
