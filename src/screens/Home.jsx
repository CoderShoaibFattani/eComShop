import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import "../App.css";
import MUICard from "../components/MUICard/MUICard";
import { Grid, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

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
      <div className="hero-background">
        <div className="hero">
          <Header />
          <Section />
        </div>
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
        <Typography variant="h3" component="h1">
          Featured Products
        </Typography>
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
          {productsData.map((e, i) => {
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
      <Footer />
    </>
  );
};

export default Home;
