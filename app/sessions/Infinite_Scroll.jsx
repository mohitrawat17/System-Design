import axios from "axios";
import React, { useEffect, useState } from "react";

const Infinite_Scroll = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get(`https://reqres.in/api/users?page=1`);
    setUsers((prev) => [...prev, ...res.data.data]);
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight <=
      window.scrollY + window.innerHeight + 10
    ) {
      getData();
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {users.map((data) => (
          <div>
            <p>{data?.first_name}</p>
            <img src={data?.avatar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infinite_Scroll;
