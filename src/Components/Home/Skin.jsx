import React from "react";
import { Box, Container, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import microImg from "../assets/s1.png";
import wartImg from "../assets/s2.png";
import laserImg from "../assets/s3.jpeg";
import hydraImg from "../assets/s4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const ArchCardWrapper = styled(Box)({
  position: "relative",
  borderTop: "2px solid #ec2024",
  borderRadius: "150px 150px 20px 20px",
  background: "#fff",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50px",
    bottom: 0,
    left: 0,
    width: "1px",
    background:
      "linear-gradient(to bottom, #ec2024 0%, #ec2024 80%, transparent 100%)",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50px",
    bottom: 0,
    right: 0,
    width: "1px",
    background:
      "linear-gradient(to bottom, #ec2024 0%, #ec2024 80%, transparent 100%)",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
  },
});

const ArchImg = styled(Box)({
  width: "100%",
  height: "200px",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
});

const ArchCardBody = styled(Box)({
  padding: "1.5rem 1rem",
  textAlign: "center",
});

// Custom red arrow components for slider
const NextArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      right: -20,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 30,
      color: "red",
      cursor: "pointer",
      zIndex: 2,
    }}
  >
    →
  </Box>
);

const PrevArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: -20,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 30,
      color: "red",
      cursor: "pointer",
      zIndex: 2,
    }}
  >
    ←
  </Box>
);

const SkinServices = () => {
  const services = [
    {
      title: "Remedial Massage",
      desc: "A targeted massage to relieve chronic aches, tension, and muscle soreness.",
      img: microImg,
    },
    {
      title: "Wart Removal",
      desc: "Advanced cryotherapy techniques for safe and effective wart removal.",
      img: wartImg,
    },
    {
      title: "Laser Hair Removal",
      desc: "Say goodbye to unwanted hair with our safe and long-lasting laser treatments.",
      img: laserImg,
    },
    {
      title: "HydraFacial",
      desc: "Deeply cleanse, extract, and hydrate for instantly glowing skin.",
      img: hydraImg,
    },
  ];

  const isMobile = useMediaQuery("(max-width:600px)");

  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,          // <-- added
  autoplaySpeed: 3000,     // 3 seconds per slide
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};


  return (
    <Box component="section" py={5}>
      <Container data-aos="fade-up">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5}>
          Skin Services
        </Typography>

        {isMobile ? (
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <Box key={index} px={-1}>
                <ArchCardWrapper>
                  <ArchImg>
                    <img src={service.img} alt={service.title} />
                  </ArchImg>
                  <ArchCardBody>
                    <Typography variant="h6" fontWeight={600} mt={3}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {service.desc}
                    </Typography>
                  </ArchCardBody>
                </ArchCardWrapper>
              </Box>
            ))}
          </Slider>
        ) : (
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{xs:12,md:6,lg:3,sm:6}} key={index}>
                <ArchCardWrapper>
                  <ArchImg>
                    <img src={service.img} alt={service.title} />
                  </ArchImg>
                  <ArchCardBody>
                    <Typography variant="h6" fontWeight={600} mt={3}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {service.desc}
                    </Typography>
                  </ArchCardBody>
                </ArchCardWrapper>
              </Grid>
            ))}
          </Grid>
        )}

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ec2024",
              borderRadius: "50px",
              px: 4,
              py: 1.2,
              "&:hover": { backgroundColor: "#b5171a" },
            }}
            href="/services"
          >
            View More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SkinServices;
