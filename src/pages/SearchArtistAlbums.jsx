import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Album from "../components/Album";
import Spinner from "react-bootstrap/Spinner";

function SearchArtistAlbums() {
  const [artistToSearch, setArtistToSearch] = useState("");
  const [albums, setAlbums] = useState([]);
  const [backendRequest, setBackendRequest] = useState(false);
  const [apiStatus, setApiStatus] = useState(0);
  const [showValidations, setShowValidations] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setShowValidations(false);
    setApiStatus(0);
    setAlbums([]);

    if (artistToSearch !== "") {
      setBackendRequest(true);

      try {
        const resultAlbums = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/artist/albums/${artistToSearch}`,
          {
            method: "GET",
          }
        );
        const dataAlbums = await resultAlbums.json();

        setAlbums(dataAlbums);
        setBackendRequest(false);
        setApiStatus(dataAlbums.code);
      } catch (error) {
        alert(error);
      }
    } else {
      setShowValidations(true);
    }
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
          className="mt-4 mb-4"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>

      {showValidations && (
        <span className="text-start text-danger fw-bold ">
          Artist name is required
        </span>
      )}

      {backendRequest && (
        <Spinner animation="border" role="status" variant="success"></Spinner>
      )}

      {apiStatus === 404 && <p>Not results found</p>}
      {apiStatus === 400 && <p>An error has ocurred</p>}

      {albums.length > 0 && (
        <div id="albums" className="row ">
          {albums.map((album) => (
            <div
              key={album.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5"
            >
              <Album album={album} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchArtistAlbums;
