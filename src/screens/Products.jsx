import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import { Grid, Typography } from "@mui/material";
import MUICard from "../components/MUICard/MUICard";

import "../App.css";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [category, setCategory] = useState("");
  // console.log(category);
  const navigate = useNavigate();

  const filteredData = productsData.filter((e) => e.category === category);

  const getDataFromApi = async () => {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    const data = await apiData.data;
    setProductsData(data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(#4f4f4f, #272c41)",
          opacity: "0.8",
        }}
      >
        <Header />
      </div>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 10px",
        }}
      >
        <Grid item>
          <Typography variant="h3" component="h1">
            {category === "" ? "ALL PRODUCTS" : category.toUpperCase()}
          </Typography>
          <div className="select-wrapper">
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Products</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "space-evenly",
            boxSizing: "border-box",
            gap: "10px",
            margin: "20px 10px",
          }}
        >
          {category === ""
            ? productsData.map((e, i) => {
                return (
                  <div key={i}>
                    <MUICard
                      title={e.title}
                      desc={e.description}
                      img={e.image}
                      id={e.id}
                      price={e.price}
                      category={e.category}
                      rating={e.rating.rate}
                    />
                  </div>
                );
              })
            : filteredData.map((e, i) => {
                return (
                  <div key={i}>
                    <MUICard
                      title={e.title}
                      desc={e.description}
                      img={e.image}
                      id={e.id}
                      price={e.price}
                      category={e.category}
                      rating={e.rating.rate}
                    />
                  </div>
                );
              })}
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
