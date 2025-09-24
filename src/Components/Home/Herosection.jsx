import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import BgImage from "../assets/1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OvalImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  height: "450px",
  borderRadius: 50,
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const GradientBox = styled(Box)({
  padding: "4rem 1rem",
});

const HeroDesign = () => {
  return (
    <GradientBox bgcolor={"#f4eae6ff"}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        py={{ xs: 5, md: 5 }}
        mt={{ xs: -8, md: 10, lg: 2 }}
      >
        {/* LEFT TEXT CONTENT */}
        <Grid
          size={{ xs: 12, lg: 6,md:6 }}
          order={{ xs: 1, lg: 1 }}
          sx={{
            mt: { xs: 2, md: -1 },
            px: { xs: 2, sm: 4, md: 6 },
          }}
          data-aos="fade-down"
        >
          <Box>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "2rem",lg:'2rem' },
                lineHeight: 1.4,
                mb: 4,
                color: "#ec2828ff",
                textAlign: { xs: "center", lg: "left",md: "left"  },
              }}
            >
              Hair & Skin Wellness in Cumbum – Tailored to Your Lifestyle
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "16px",
                  md: "1.4rem",
                  lg: "1.2rem",
                },
                color: "#444",
                mb: 4,
                textAlign: { xs: "center", lg: "left" ,md:'left'},
              }}
            >
              GroHair and GloSkin proudly bring expert care in hair restoration
              and skin health to Cumbum. Our certified trichologists and
              skincare professionals deliver customized treatments focused on
              effective, lasting results.
              <br />
              <br />
              Trusted by countless clients for life-changing transformations and
              clinical excellence.
            </Typography>

            {/* Book Now Button */}
             <Link to="/booknow" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#E2231A",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                mt: 1,
                "&:hover": { backgroundColor: "#c81d15" },
              }}
            >
              Book Now
            </Button>
          </Link>
          </Box>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid
          size={{ xs: 12, lg: 6 ,md:6}}
          order={{ xs: 2, lg: 2 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 0, md: -9, lg: -3 },
            
          }}
          data-aos="fade-up"
        >
          <OvalImage src={BgImage} alt="Skincare" />
        </Grid>
      </Grid>
    </GradientBox>
  );
};

export default HeroDesign;
