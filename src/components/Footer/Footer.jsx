import { Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/Ow Logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Grid container spacing={3} className="gridContainer">
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <img src={logo} alt="" />
        <Typography
          variant="p"
          component="p"
          sx={{ marginTop: "20px", width: "70%" }}
        >
          Transform your style with OnlineWardrobe - where fashion meets
          elegance. Discover the latest trends and timeless classics to elevate
          your wardrobe every day.
        </Typography>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Typography variant="h4" component="h6">
          Quick Links
        </Typography>
        <ul className="ul1">
          <li>
            <Link to="/" className="link2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link2">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/" className="link2">
              About Us
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Typography variant="h4" component="h6">
          Shop Collections
        </Typography>
        <ul className="ul1">
          <li>
            <Link className="link2">Mens's Collection</Link>
          </li>
          <li>
            <Link className="link2">Womens's Collection</Link>
          </li>
          <li>
            <Link className="link2">Electronics</Link>
          </li>
          <li>
            <Link className="link2">Jewelery</Link>
          </li>
        </ul>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Typography variant="h4" component="h6">
          Shop Collections
        </Typography>
        <ul className="ul1">
          <li>
            <Link className="link2">Mens's Collection</Link>
          </li>
          <li>
            <Link className="link2">Womens's Collection</Link>
          </li>
          <li>
            <Link className="link2">Electronics</Link>
          </li>
          <li>
            <Link className="link2">Jewelery</Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;
