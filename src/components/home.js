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
import mo2 from "../images/mo2.PNG";
import mo3 from "../images/mo3.PNG";

import mo5 from "../images/mo5.PNG";
import mo6 from "../images/mo6.PNG";
import mo7 from "../images/mo7.PNG";
import mo8 from "../images/mo8.PNG";
import mo9 from "../images/mo9.PNG";
import mo10 from "../images/mo10.PNG";
import mo11 from "../images/mo11.PNG";
import mo12 from "../images/mo12.PNG";
import mo13 from "../images/mo13.PNG";
import mo14 from "../images/mo14.PNG";
import mo15 from "../images/mo15.PNG";
import mo16 from "../images/mo16.PNG";

import mo18 from "../images/mo18.PNG";
import mo19 from "../images/mo19.PNG";
import mo20 from "../images/mo20.PNG";
import mo21 from "../images/mo21.PNG";

import sc1 from "../images/sc1.PNG";
import sc2 from "../images/sc2.PNG";
import sc3 from "../images/sc3.PNG";

import sc5 from "../images/sc5.PNG";
import sc6 from "../images/sc6.PNG";
import sc7 from "../images/sc7.PNG";
import sc8 from "../images/sc8.PNG";
import sc9 from "../images/sc9.PNG";
import sc10 from "../images/sc10.PNG";
import sc11 from "../images/sc11.PNG";
import sc12 from "../images/sc12.PNG";
import sc13 from "../images/sc13.PNG";
import sc14 from "../images/sc14.PNG";
import sc15 from "../images/sc15.PNG";
import sc16 from "../images/sc16.PNG";
import sc17 from "../images/sc17.PNG";
import sc18 from "../images/sc18.PNG";
import sc19 from "../images/sc19.PNG";
import sc20 from "../images/sc20.PNG";
import sc21 from "../images/sc21.PNG";
import sc22 from "../images/sc22.PNG";
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
  const [dailogeTitle, setDailogeTitle] = useState();
  const handleClickOpen = (label) => {
    setDailogeTitle(label);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const itemData =
    dailogeTitle === "Morocco"
      ? [
          {
            img: mo2,
            rows: 2,
            cols: 2,
          },
          {
            img: mo5,
            rows: 2,
            cols: 2,
          },
          {
            img: mo3,
            rows: 3,
            cols: 3,
          },
          {
            img: mo6,
          },
          {
            img: mo7,
          },
          {
            img: mo8,
          },
          {
            img: mo9,
          },
          {
            img: mo10,
          },
          {
            img: mo11,
          },
          {
            img: mo12,
          },
          {
            img: mo13,
          },
          {
            img: mo14,
          },

          {
            img: mo15,
          },
          {
            img: mo16,
          },
          {
            img: mo18,
          },
          {
            img: mo19,
          },
          {
            img: mo20,
          },
          {
            img: mo21,
          },
        ]
      : "Scotland"
      ? [
          {
            img: sc1,
            rows: 2,
            cols: 2,
          },
          {
            img: sc2,
          },
          {
            img: sc3,
          },
          {
            img: sc5,
          },
          {
            img: sc6,
          },
          {
            img: sc7,
          },
          {
            img: sc8,
          },
          {
            img: sc9,
          },
          {
            img: sc10,
          },
          {
            img: sc11,
          },
          {
            img: sc12,
          },
          {
            img: sc13,
          },
          {
            img: sc14,
          },
          {
            img: sc15,
          },
          {
            img: sc16,
          },
          {
            img: sc17,
          },
          {
            img: sc18,
          },
          {
            img: sc19,
          },
          {
            img: sc20,
          },
           {
            img: sc21,
          },
          {
            img: sc22,
          },
        ]
      : [];

  const avatarData = [
    {
      id: 1,
      label: "Morocco",
      img: mo5,
    },
    {
      id: 2,
      label: "Scotland",
      img: sc6,
    },
    {
      id: 3,
      label: "Turkey",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    {
      id: 4,
      label: "Brighton",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    {
      id: 5,
      label: "Wales",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },

    {
      id: 8,
      label: "London",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
  ];

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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            marginLeft: "0px!important",
            marginTop: "0px!important",
          }}
        >
          {avatarData.map((item) => (
            <Grid xs={3} sm={4} md={4} key={item?.id}>
              <Avatar
                alt="ss"
                src={item?.img}
                onClick={() => handleClickOpen(item?.label)}
                sx={{ width: 56, height: 56, cursor: "pointer" }}
              />
              <Typography>{item?.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Dialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {dailogeTitle ? dailogeTitle : ""}
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
            overflowY: "scroll",
            overflowX: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          dividers
        >
          <ImageList
            sx={{
              width: 300,
              height: 450,
              overflowY: "scroll",
              overflowX: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
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
