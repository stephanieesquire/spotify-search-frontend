import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Album.css";

function Album({ album }) {
  return (
    <Card sx={{ minHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={album.images[1].url}
          alt={album.name}
          className="img-fluid album-img"
        />
        <CardContent className="text-start">
          <Typography
            gutterBottom
            variant="span"
            component="div"
            className="fw-bold mb-4"
          >
            {album.name}
          </Typography>
          <Typography variant="body2">
            {`Release date: ${album.release_date}`}
          </Typography>
          <Typography variant="body2">
            {`Total tracks: ${album.total_tracks}`}
          </Typography>
          <Typography variant="body2">
            {`Popularity: ${album.popularity}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Album;
