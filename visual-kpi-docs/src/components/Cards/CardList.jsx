import React from 'react';

const CardList = ({ data, Card, className, numColumns }) => {


  const setGridColumns = (numColumns) => {
      if (numColumns) {
        // Create a string of column widths
        const columnWidths = Array(numColumns).fill('minmax(200px, 1fr)').join(' ');
        return columnWidths;
      } else {
        // Default to auto-fill with a minimum width of 200px
        return 'repeat(auto-fill, minmax(200px, 1fr))';
      }
  };
  
  // Use the function to set the grid-template-columns style
  const gridTemplateColumns = setGridColumns(numColumns);

  return (
    <div className={className} style={{ gridTemplateColumns: gridTemplateColumns}}>
      {data.map((item, index) => (
        <Card key={index} logo={item.logo} name={item.name} linkTo={item.linkTo} />
      ))}
    </div>
  );
};

export default CardList