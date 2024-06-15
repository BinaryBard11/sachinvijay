import { Box, Typography, Grid, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";


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
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZpaWi_KG6aPmftST481jCxENW95auDOu7AZn7GPM4NfdsDs1_k8XCFbi24e_DG2cSmXOhCEG9jR9HAGHHFsdgfbMw0ej2d1so=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaN-JJaWko_gWb00wTC6L2WJj9TXumEdFjoQ27J1b0O3tXYuW3z70dcGVJFhitsDEZG34qtAXZu6bW4PNeiJ9wemMkgwO_xpys=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihYsasXO-ROcIBGi90-yjsH7cREyANW9vJcC8LjkG7RKh-kbqbKwjWr2w_dtwm8i4w3FV8T7mEJ1DnRWYJiOQ3atXULoKl4EIHY=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihb3xWW8FWQk3AnARrizEskpVfK-xKoeTTVAephxuZgovLAb7-ojbmABudu_4F0EY8BbsG7hL-714WSi-4P2gsL6C6ecHye6Bw=s2560",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihbN_9D6_SVpwHrv4NrM4xjvF-o7MOjTBrkODBXLASeFsrpx5_2qNe7y5Eqf8CYrvYHKm2PBWvAjf_x5ymYlBIZ3iN3SULbmp5g=s2560",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaAtIOnzNuyPyNC_wLLyKiMixDtYhkMlqDERWX2gL55OdocSSCw_40H6gBOQliKrzWv5L0hkfklEYS6fDypxsJ7CeZlXh_-bQ=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihbEhFrZHtZRneJ_z80FqZI4LDRLlmW26rJFdK1UqTCYh4EDBiICAuZCtJAkZNWcYf9aTOBTTSPKdcEEuAQnGOzYC2pz0nIo6w=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaKIC9ajFKFyv3upBIRDiY0DzhY7k7P8hzKERv7sKVPktogMJqvSjvPyVY226g6ut7aM72P5WLlQxrrlLeP8jTVW8R-7EMSeJ4=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZpaWi_KG6aPmftST481jCxENW95auDOu7AZn7GPM4NfdsDs1_k8XCFbi24e_DG2cSmXOhCEG9jR9HAGHHFsdgfbMw0ej2d1so=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihbHI65EEbl5_MHkDoT-j_KQcBWAW4iX-9XwhdvBf0mhURuHTAFxuhckz3LDaPbKXsyvbgo1d3_FyHCfk65-cGblMn19VIO1K7E=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaV-ylZYB7EuXxAoMi2ucRuf1SYKvhysQPZJ5DeeJ1b_wKcXa36d_Mtvl2OvvkdzzhityIhiZRe8PhQ5X6luU03jkh1JadBEw=s1600-rw-v1",
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
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbXQH58PdiDsz4fLgTn11bFPFqIopFNd_chRFJEyQVbPolQm2N7vM-c-QIHj2w5jrLvFqrCwpaOZ0sBHPFiid2tn_IAlXKfcw=s1600-rw-v1",
            rows: 2,
            cols: 2,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYRYcUofl7nebjcIdgNqH7ujLObxJLJ2S85weoAwzYgWm5SoeACI1Tc21pCO_eDf30GvGnILVeN3dJN6YlHBSmrRmS6EhWHmhE=s1600-rw-v1",
            rows: 2,
            cols: 2,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihadIiQ2Pf-yOlH6hJP3ScE0jkE_jpkJn3ii7ifkcaACwgR_2ykWL6EVT76vUCqNSrzq8JUGCZNYf8RoKqMH-_f-JvlVj_11_Cw=s1600-rw-v1",
            rows: 3,
            cols: 3,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZmZb6qvVvMvwP8EVwYaK1yiOg5cFFPXJOUleVF9adszMHw7G_-aFnHJXd8BDeKYJ1vaU5f8woRtKWMTYRx8ik0Jg9d4HPElWs=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYqUqHDwOYOb1P6bzE3P5RIsL_0PzZC8Pp3LI6SnKq1C6aRgDH9D1_ZNugDI4bIlBv79QGiJB1kYSugXfisPayJzl3zsGRigho=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYtC8fQd21aAHTWR9sQ4n_XsjtL7NT_1QZlL8A57Asz5RL0CySnI9a38TvTvYwMscdLWImkNBxCZb0QCWjJWvuv7pxgxgAPJ5I=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihY8gVhlDlNWsSNBJv9SkockfQFfyS5Nh84LkHHW9snfw1kvsiPDt1Z3bNv6a_LAC9sF6lxWOVXJMDwbS3Tc5Fkqa7IF40YxlQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYJ_Kn8__olub2LiXjX7ses1qte_IPWWKNv2D64lgOx77f0gYKvxB2CeatA0EY3hH-XkXSGZYAcNrM_YpSVmYf1e1k0CfApH8c=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpiha0g4wkRAmKhOUhii_uR43LfPu0YduDd0jkgKy6v-M07Q3luuBT_IRoJjWfwiMvDyAUsV8vShLevEI9uii1UA43htWZhoxyVXc=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYyd1d3bPQ42VA0_TqMjvcMiUvx-ApnzdNcjpVWkzAyeR9s0VlCkfHCJ9D0u6u42IbsJDUfXjPBttjwvTqrCJJvoDJnh4Z2rb8=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbX5ISbItEnuq1rY6adJ6f8JUBMAzgbLYRH4pn7tPgzr3J61UhmkZKHXpoPhR4ImUJwTRuGkXJgk184eRXfq4DHBLjgUud9NA=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYhV9peRQ4Z--qYizkpfA0lBpveyIMZVyPF8Qg47UzCAetxZRwYTrB59s0eAVCTC2ClpFk__Zg-RmD-nEcworNfhlcmni8sWw=s1600-rw-v1",
          },

          {
            img:"https://lh3.googleusercontent.com/drive-viewer/AKGpihbmjRYNwdiZ0w8yyKWrOH2UC8MOukFKHncwBpCvCD9oVyo8CwvWi_mPKIFuCI_XXhENGaI7Ip31i1jQWZO7VVC2cuLf7PEpbg=s1600-rw-v1" ,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYppPWggyGHop1Y_EhHXGlXJdzwJZ-MnH3zenidi6KrV3Fq_eKfOf8zuaz89LPNoschT8duIlCi_cuutLiXIz0jVK1AyBIVZYQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbM0Pm88EiiqsyKl_bzKNvPlxqXXtlvygV694AzhTosR9MqLUg62Rp_-hrrO_Sf57E5DQ3IsUqbKk7uDl61DhRhhwuy56DJWMA=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihb2kNne-zzm7WpcGnAOKFGM8DToaH9lYQQm2a-F7LUH7gFzwKBE7zQMSEtKbIhQsdKG2oDxdiz2xmqnSjMXq-FwiRolbx_NNXw=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZpafeqZz-ynPJPxUgILvCr4_lkbeScZsOjY3ELGCxZLY8dmZ5ehjvEKu6Mn4c6aGvse3xRmyJhDKR1EyPqeHpBX7tLba7ZlnE=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZXUyidf3iVyApJJAq0l8mkYR7wxlc22S9Ix8ZJSsXB7XZcgtsgOSJzyFyLOUYzsYDPJ6d6NHx20CzsgMipdU_5cdTAGj3FdyM=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbgPheqV5RbvtE3SNXNBSSde2vDvUBFpyWBBZZpnxwh96-SjZdiuMf2hE7nZPqi2ZyA4JHogflknCigAhRvqylXWJmvnB49Sxc=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbLKjglRSIeJtW5CAU9tfecTi_YFQD_ALSad-NVy_ZV5E4qDqJ3BHb79nRBlXyji8zK5eT5sNHP-f0uDsWpaeJ_o5_hbtxogEo=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ9Bml4hz9sxGMnDcOqkWo1m3oAHSgXnNiSek0bliqxSNHy45K9eg9QI9lWogfWg_Cbpj9dhwWfWwRuPOWObs4HjmqBE2aWdg=s1600-rw-v1",
          },
          {
            img:"https://lh3.googleusercontent.com/drive-viewer/AKGpihbi35p8pRWhFB6fY44payz2-xlriwr8Mawn3qsC08h2q2anUz5wH5zDz4iKKjQ5Kh6pZIWmiVuZFgtbsavWcCZim0CbDsabZrI=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZoCssLc_zFQFAX-7DdUu8HOmpSwPjIzOd4KPChcQ6Z3AHLItS-Jceso8YzvROEkLMDbXSSd9UVeb-ITF2fO_FrgUFZKHwsUw=s1600-rw-v1",
          },
        ]
      : dailogeTitle ==="Scotland"
      ? [
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbq4mDiP_PCpKPK0LimCQA-EHlMjD66Q74TY8Z6019rOHa3GW-w-iXLeN4_ZHaunztaZJRNlijxZWtNJp2D-Xr612JDiTUYRWM=s1600-rw-v1",
            rows: 2,
            cols: 2,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaoSLJ8bl8U3Gm2xQOUlhtlQpz9CnXQrJgYJYaqXBc4DlF7Q0RtxYYvdzHrAZ3Nvk0TJFnFi_aQW-5LQ52hVYPiRiTnkDtg3w=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaNdrgtDHJIg8P2Ag4vcS_WIA0LZjZ7KHfRrme9LZ-Ct2wbLUlRmq9d8W9yIzR3mcYZcs-nZCIplvx3Hb_bqWiBwNFECBehsA=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZHy47oN-qdVxX_B6tM-4uDhMSJ7ylYK70YQtCh_d8SKlGtGURS2a2yE-iDEmwVAA8ySPd7zX_fFAVvQNsbSbjtzJlolC6dCFw=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaEIP42xpOZhrHPdNtq8JKaBCWBlK5JED4oEkP4vaeDZ44IycuPg2A7EQucSELz5GZOJDt-lOGbUoq3Fkrob7aJQ_we9hDcyAs=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihY7wBgLp4kVVFifi5izv_k_Rd9i7tpNScbC83n7jxfznfDy-Sjxhm40pHsMPPPRf6IPhbCiUPcU4hZIs1H-sJxgRh0CDdTL3OE=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbaNr1nVIVl5fmCiVEtwqzB5XOWC_C36AR6sMYOuOrGjbYEBe_Kx1AYjTej20IpqqyMJjKumPUbHCLQqrEVfKgq-U9-R8ohXIs=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpiha3LXqgsFCSeNosiozdkSZ52pvwfLhUyJRlsLV97KgO2AHY__USNHqVxr3rIkMgqCoUlGZxqy0wBZd8DsYNNqgMwURDacbw8l4=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYhwTKyR-XYdhrDn_DAb45ucXG4ZepOnK_AdIoxdkD8g643Hbwu-68jELSpoNMwf8GXc-kDHRQqsY5myXBVggLwyUP8N-IHEw=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYHXnQpegCE7BTJivJStUHgchi7_mY0AiInDuzswb44Dg66zj65MbooEchuB89pAQ4o2YpZ994bjHpKJ4nG9W2ime3lV53fGxg=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZEX7eQHOTro-Hv26KIzNCbG8_fVAJNQIoI3uo6aOf8Avhmf7qMtsL85087DxuzGE19E0j80YhxcDCqPGFdE_QXq2u1tc_x1ys=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYfb_ZPEUFYuWUasOOSPLVdcMILxITRwOXNb7vIdxYh14j2v3cWLVTonSb0F7UOY8C-CMstimFEbN2PHikMvE8c0bCLU-ithCg=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaQ3Don0M2stencH9uWslw53zu-DOPhKtr6TTfUE4csvmD4djZwAuRjRV7BfDeSmobDs3OOllP95fJC86yRG8U2zlz5m7hf_ts=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbkjyp2F61sFbViJdpn_JhTMah1XX44j6ZdTm9bm4NhmWTQJYl8fKogN3YxG94B7bod44CtQ7xeMkGVGIA7n342XiqpgtFzSQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpiha5tEH8YP4zJN4_lMnJfA2E_U5KuQNLRZyHZadX435ZGVnK40Rt1wDRB70jupGyONr3S0TvICY9_6gcCHO-PyWnmhMm5SnIxXc=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZj0kzw0j3KjbC5hIK2y1Rb60spR-mYJykcqmj9k2R2LVSFVdvM0lQWeoYqvlS8H-168VXgslEb3LTsg5msPJP7rQS3tazI3g=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbR-Nefe0bcBO7ZX1hAAo89ZNDtVcQh3Q5jyjfn_IWJ3WrwsLaAt2iz5vkrTS1ki6PcGyZLUUZcVxInXFcg-VTdD5LJ9vakDME=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihY6UcskZ4qdLEvgZEfRidUnfqEyVREfITfyyNR3L8bzieGKmwTk1CKvWRE5V56hiknQKj4ys2-acl28xyS2rf8gUdgC7JXWtaY=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaEKgv9cHHaFz_8W0gNqcZGrx8zuH1fA9Mdqms8heZgtYuiiDCVYsWPeUaGqX4aqpWyjJQJBGyAAym1EBdSdnwfwFpi3c7BUQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZvQp3_6aTQAMEujZTkU3r4zeDcpC3EHBKSOa6HLH1kZaFO-KCFKlQalV4KYdhDC8qgIk3OCZMzlQ4U85m3I6TGp9KJTvyIiuE=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaXUBQfhBq16cQ3wCVMTQDWg-Dputn0YhVTG1bLgb70Ic7z2-fZMM46-YK6p35Kir35o7HELJ76QbE-snrqwAWLDda2CuJtMQ=s1600-rw-v1",
          },
        ]
      :dailogeTitle === "Turkey"
      ? [
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ0B776bkis3SmPyiOd6ad0hfmNHPsCjFd2bSoQcJQVUwNJ1Hs5ulloju4SYBgvu0oS1vn9hLFgkLaB5D9T1uV7ONvdBGfil5w=s1600-rw-v1",
            rows: 2,
            cols: 2,
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ7r-aRgRi8IiV3cjlWnzeEtDVvJkydOcNijo5apSl13iSZ9Drsnc28IptqDgeMKmok_6V1HYX0BruHGzcIh5Mfawoel5Gz4EA=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYIiSielien3Qu1NyPmy-Nop9wwwFq3_Kyf59e2bivCvsf5uRvKxBdfgJ2blWPdYKh2H51c4H0Ffdj9yDBuV_2fQhLxv4Sa8hE=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYiAfDGL8-sm_JWP15pkm0z1DhzjT6rHvsm-HHinQqNGY5T0NaSg7GlrUIRINu4Tja1beE8Md1ZUPdinNG2nZxCryKGFXYdP7Q=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYRSPh9O9utXhmuXybO_cZlsjCcLhHvhoyFnhnQypJQJj8cmz0cyYWe5f_X-Qt3G-vf2JgELzv_r0_oX_yNUHtr02M37RujmVw=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbJifYERSQ9K90MG4kwHndrNQ0q3kzZxqVCd_m_cUoWY1huKwM3cfw_JV95v_0k2iaaKBLO_6ybSNtsEjTAKCD6WCLd6UANq_4=s1600-rw-v1",
          },
        
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihY5r3qkPiYJloOyr387TdzReOiJz3eegCFU4obE_akk7GgcC8mkrBpLCbGY7FegFCC_DYPoY7jMGfRTq4rwQXX6IptE9uY-cQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbXfba9OlyqQcJNPeUYuxOfxwjgo0PezqLQASTI5cAZKFsN9QEzoIrWKwNnLRgLoUP1n3OomSWsIDgrcwcYMEEhuM6GgTtIrQ=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihayx3DFG5B-ESg6hI8bBKvNUIEsDdK0rB9bbXj_nFm1Gco6nuWT_U77pC2LkIIx_U2SVoVa9NIp-O6cXLzsiRBLLAhYrSKxLPY=s1600-rw-v1",
          },
         
          

          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbk2m_dePgvGBbz1tvJeVN0DGbVK066eAGlQqJJ7W6HoMLoW4GL59D4iPsWRxZru3aG10R-sdjRn6Z_2Z1RbMRD7glEYKzGWno=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpiha5QFRL0dJxp0GvHIi640yYQkYRXpgnNVgL56WiMOqhCRN1sOmhCNAPa5WyYfS5ly7tod1DcIQ-f4llMKDkFLGQEnVFRtqtuG8=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihb2Zh37VnCvVYhA1HDrx6ZDsHKL05-sAADluXBz_5EJvtID0mu1_p_Q949k-oGUrkewZlAFIkof4dYrJ0Dh63a9a7wOXbsgK20=s1600-rw-v1",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihZz029fx6Jj_AJB67kTnZS5bFfudoNvg-NHKPBEVxrskQrtw-D-m1B9E0SDwCPtpqULegsPJMD2rqAo_uVF_oTbnGQwnMWGuQ=s1600-rw-v117",
          },
          {
            img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbeUhgwEtA4vIRN0Sukqq1GRivmli-t5t2nw-D9ynVFeAXA0ZDNn2JwVw0PZBmDBuTIWoqy2OJQ8G_OL4GYyBi2wMUtQ04DlPo=s1600-rw-v1",
          },
        ]
      : [];

  const avatarData = [
    {
      id: 1,
      label: "Morocco",
      img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYRYcUofl7nebjcIdgNqH7ujLObxJLJ2S85weoAwzYgWm5SoeACI1Tc21pCO_eDf30GvGnILVeN3dJN6YlHBSmrRmS6EhWHmhE=s1600-rw-v1",
    },
    {
      id: 2,
      label: "Scotland",
      img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihaEIP42xpOZhrHPdNtq8JKaBCWBlK5JED4oEkP4vaeDZ44IycuPg2A7EQucSELz5GZOJDt-lOGbUoq3Fkrob7aJQ_we9hDcyAs=s1600-rw-v1",
    },
    {
      id: 3,
      label: "Turkey",
      img: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbeUhgwEtA4vIRN0Sukqq1GRivmli-t5t2nw-D9ynVFeAXA0ZDNn2JwVw0PZBmDBuTIWoqy2OJQ8G_OL4GYyBi2wMUtQ04DlPo=s1600-rw-v1",
    },
    {
      id: 4,
      label: "Cormwall",
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
        <img src={"https://lh3.googleusercontent.com/drive-viewer/AKGpihanS8OjjgJGCjq3dReVNScAhyxQQq_b-iazvlbVVbaicqPZVo-KV0bhl9F31-pB3j9vsttXMI70wLKDSbvjjj2xDQPZW59s8bg=s1600-rw-v1"} alt="img" width={"300px"} />

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
