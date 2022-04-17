import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Album from "../components/Album";

function SearchArtistAlbums() {
  const [artistToSearch, setArtistToSearch] = useState("");
  const [albums, setAlbums] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const resultAlbums = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/artist/albums/${artistToSearch}`,
      {
        method: "GET",
      }
    );
    const dataAlbums = await resultAlbums.json();
    setAlbums(dataAlbums);
    console.log(dataAlbums);
  };

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
        onSubmit={(ev) => handleSubmit(ev)}
      >
        <TextField
          className="w-75"
          id="standard-basic"
          label="Artist name"
          variant="standard"
          value={artistToSearch}
          onChange={(ev) => setArtistToSearch(ev.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="mt-4"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>

      {albums && (
        <div id="albums" className="row mt-5">
          {albums.map((album) => (
            <div key={album.id} className="col-3">
              <Album album={album} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchArtistAlbums;
