import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
//   console.log(id);
  const [singleProductData, setSingleProductData] = useState([]);
//   console.log(singleProductData);

  const getDataFromApi = async () => {
    const apiData = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = await apiData.data
    setSingleProductData([data]);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <h1 style={{textAlign:"center"}}>Single Product Data</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {singleProductData.map((e, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                height: "700px",
                width: "600px",
              }}
            >
              <img src={e.image} alt="" width={400} height={350} />
              <h1>{e.title}</h1>
              <p>{e.description.slice(0, 100)}</p>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleProduct;
