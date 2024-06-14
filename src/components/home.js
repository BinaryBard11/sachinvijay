import { Box, Typography, Grid, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
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

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Home() {
  const photos1 = [
    img10,
    img9,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
  ];

  const [currentPhotoIndex1, setCurrentPhotoIndex1] = useState(0);

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
  const [open, setOpen] = React.useState(false);
const [dailogeTitle,setDailogeTitle]=useState()
  const handleClickOpen = (label) => {
    setDailogeTitle(label)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        sx={{
          display: "flex",
          justifyContent: "center",

          padding: "0px 0px 20px 30px",
          // padding: "100px 134px 37px 134px",
        }}
      >
        <img src={img26} alt="img" width={"300px"} />

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
            everything that makes me, well, me!
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
              width: "300px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          // height: "500px",

          padding: "20px",
          display: "flex",
          flexDirection: "column",
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
          Travel Dairy
        </Typography>
        <Box
          sx={{
            display: "grid",
            
            // justifyContent:"center",
            // alignContent:"center",
            // columnGap: { xs: "2rem", md: "1rem", lg: "2rem", xl: "3rem" },
            // rowGap: { xs: "2rem", lg: "1rem" },
            gridTemplateColumns: {
              xs: "repeat(4, 50px)",
              // sm: "repeat(2, 1fr)",
              // lg: "repeat(3, 1fr)",
            },
            // gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          {avatarData.map((item) => (
          <Box
          key={item?.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              width: "fit-content",
            }}
          >
            <Avatar
              alt="ss"
               src={item?.img}
               onClick={() => handleClickOpen(item?.label)}
              sx={{ width: 56, height: 56, cursor: "pointer" }}
            />
            <Typography sx={{ textAlign: "center" }}>{item?.label}</Typography>
          </Box>
         ))}
         
        </Box>
      </Grid>
      <Dialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {dailogeTitle?dailogeTitle:""}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            overflowY: "hidden",
          }}
          dividers
        >
          <ImageList
            sx={{ width: 300, height: 450, overflowY: "scroll",
            overflowX: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            }, }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
const avatarData = [
  {
    id:1,
    label:"Morocco",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id:2,
    label:"Scotland",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id:3,
    label:"Turkey",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id:4,
    label:"Brighton",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id:5,
    label:"Wales",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
 
  {
    id:8,
    label:"London",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
 
 
];
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
