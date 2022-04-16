import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function SearchArtistAlbums() {
  return (
    <div className="container">
      <h4 className="display-5 my-4">Artist´s albums</h4>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="w-75"
          id="standard-basic"
          label="Artist name"
          variant="standard"
        />
      </Box>
      <Button
        variant="contained"
        color="success"
        className="mt-4"
        endIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchArtistAlbums;
