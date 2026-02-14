import React from "react";
import { List } from "react-window";

function RowComponent({ index, items, style }) {
  return (
    <div
      key={index}
      style={{ ...style,background: "pink" }}
    >
      {items[index]}
    </div>
  );
}

const Virtualization = () => {
  const items = Array.from(
    { length: 10000 },
    (_, index) => `Item ${index + 1}`,
  );

  return (
    <div style={styles.page}>
        <div style={styles.container}>
          <List
          rowComponent={RowComponent}
          rowCount={items.length}
          rowHeight={20}
          rowProps={{ items }}
        />
        </div>
      </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  container:{
    height:'200px',
    width:'300px'
  }
};

export default Virtualization;
