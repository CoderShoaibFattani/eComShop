import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const MUICard = ({ title, desc, img, id, price, category, rating }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 280, height: "100%" }}>
      <CardMedia sx={{ height: 300 }} image={img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="body1" component="h3">
          {category.toUpperCase()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 10)}...
        </Typography>
        <Typography variant="p" color="text.secondary">
          {desc.slice(0, 100)}...
        </Typography>
        <br />
        <br />
        <Typography variant="h6" color="text.secondary">
          price: ${price}
        </Typography>
        <Rating name="read-only" value={rating} precision={0.1} readOnly />
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/product/${id}`)}
          style={{ color: "black" }}
        >
          Click For Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MUICard;
