import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import img26 from "../images/img26.png";


import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";

// import logo2 from "../images/logo2.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  const photos1 = [img10,img9, img3, img4,img5, img6, img7, img8, img10, img11];

  const [currentPhotoIndex1, setCurrentPhotoIndex1] = useState(0);
  

  const aboutRef = useRef(null);


  const galleryRef = useRef(null);


  const placesRef = useRef(null);


  const openInsta = () => {
    window.open(
      "https://www.instagram.com/_svj97_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank"
    );
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/Tonyhawk.sachinvijay1997", "_blank");
  };

  const openSpotify = () => {
    window.open(
      "https://open.spotify.com/user/240pq6k706l19tpoc5ltxg913?si=elJylo5lRzeMyNfPB-i7oA",
      "_blank"
    );
  };

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCurrentPhotoIndex1((prevIndex) => (prevIndex + 1) % photos1.length);
    }, 2000);

    return () => clearInterval(intervalId1);
    // eslint-disable-next-line
  }, []);
 
 
  return (
    <Grid>
      <Box
        sx={{
          top: 0,
          position: "sticky",
          zIndex: 999,
          backgroundColor: "#E8AA42",
          height: "80px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 500,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {" "}
          sachin vijay{" "}
        </Typography>

        <Box>
          <InstagramIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={openInsta}
          />{" "}
          <LinkedInIcon />{" "}
          <FacebookIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={openFacebook}
          />{" "}
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
            }}
            onClick={openSpotify}
            icon={faSpotify}
            size="2x"
          />
        </Box>
      </Box>
      <Grid
        container
        spacing={3}
        ref={aboutRef}
        sx={{
          display: "flex",
          justifyContent: "center",

          padding: "0px 0px 20px 30px",
          // padding: "100px 134px 37px 134px",
        }}
      >
        <img src={img26} alt="img" width={"400px"} />

        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              textAlign: "justify",
              padding: "0px 32px 30px 0px",
              lineHeight: "27px",
            }}
          >
            Hey there! I'm Sachin Vijay, an automotive engineer with a passion
            for traveling and living life to the fullest. Born and raised in
            India, I chased my dreams all the way to the UK, where I completed
            my master's . Traveling is my ultimate joy – there's nothing like
            exploring new places and cultures. And when it comes to food, I'm
            all in. Good food is definitely the way to my heart! I'm also a huge
            football fan, and I dream of traveling the world, discovering new
            adventures and flavors along the way. This website is my little
            corner of the internet where I share my journey, passions, and
            everything that makes me, well, me. Welcome to my world!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#F8F1F1",
          // height: "500px",

          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          ref={galleryRef}
          sx={{
            fontSize: "34px",
            fontWeight: 500,
            textTransform: "uppercase",

            textAlign: "center",
          }}
        >
          Gallery
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            onMouseEnter={() =>
              setCurrentPhotoIndex1(
                (prevIndex) => (prevIndex + 1) % photos1.length
              )
            }
            sx={{
              backgroundImage: `url(${photos1[currentPhotoIndex1]})`,
              width: "400px",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Box>
      </Grid>
      <Box ref={placesRef}>travell</Box>
    </Grid>
  );
}
