import React from 'react';
import * as s from './styled';

export default function Categories({
  category: currentCategory,
  categories,
  handleCategory,
}) {
  const categoriesSet = new Set(categories);
  const uniqueCategories = [...categoriesSet];
  const [isActive, setIsActive] = React.useState(false);

  const handleActive = (status: boolean) => {
    setIsActive(status);
  };

  return (
    <s.Tag
      onClick={() => {
        handleActive(!isActive);
      }}
    >
      {currentCategory}
      {isActive && (
        <s.Filters>
          {uniqueCategories.map((category) => (
            <s.FilterItem
              isActive={category === currentCategory}
              onClick={() => {
                handleCategory(category);
                handleActive(false);
              }}
            >
              {category}
            </s.FilterItem>
          ))}
        </s.Filters>
      )}
    </s.Tag>
  );
}
