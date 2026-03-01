import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setPageCount(products.length / pageSize);
  }, [pageSize, products]);

  useEffect(() => {
    const updated = products.slice(page * pageSize, page * pageSize + pageSize);
    setPaginatedData(updated);
  }, [products, page, pageSize]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          width: "50%",
          height: "60vh",
          overflowY: "scroll",
        }}
      >
        <div style={{ padding: "20px" }}>
          {paginatedData?.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  padding: "10px 0",
                }}
              >
                <h3>{item?.id}</h3>
                <h4>{item?.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          border: "1px solid grey",
          width: "50%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "70%", overflowX: "scroll" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "100%",
            }}
          >
            <h3
              onClick={() => {
                if (page >= 1) {
                  setPage((prev) => prev - 1);
                }
              }}
              style={{
                borderRight: "1px solid grey",
                cursor: "pointer",
                margin: "auto",
                textAlign: "center",
              }}
            >
              {"<"}
            </h3>
            {Array.from({ length: pageCount }).map((i, index) => (
              <h3
                key={index}
                onClick={() => setPage(index)}
                style={{
                  borderRight: "1px solid grey",
                  cursor: "pointer",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                {index}
              </h3>
            ))}
            <h3
              onClick={() => {
                if (page < pageCount - 1) {
                  setPage((prev) => prev + 1);
                }
              }}
              style={{
                cursor: "pointer",
                margin: "auto",
                textAlign: "center",
              }}
            >
              {">"}
            </h3>
          </div>
        </div>
        <div
          style={{ width: "30%", borderLeft: "1px solid grey", height: "100%" }}
        >
          <select
            onChange={(e) => {
              setPageSize(e.target.value);
              setPage(0);
            }}
            style={{ height: "100%" }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
