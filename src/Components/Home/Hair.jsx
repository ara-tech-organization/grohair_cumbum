import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const specialties = [
  {
    id: 1,
    title: "Scalp Micropigmentation",
    description: "Creates denser hair.",
    image: require("../assets/H1.jpeg"),
  },
  {
    id: 2,
    title: "Eyebrow Transplant",
    description: "Redefine your natural look.",
    image: require("../assets/H2.jpeg"),
  },
  {
    id: 3,
    title: "Stem X Pro Therapy",
    description: "Hair rejuvenation.",
    image: require("../assets/H3.jpeg"),
  },
  {
    id: 4,
    title: "Meso Therapy",
    description: "Nutrients for scalp.",
    image: require("../assets/H4.jpeg"),
  },
  {
    id: 5,
    title: "Oxygen Laser Therapy",
    description: "Laser + oxygen infusion.",
    image: require("../assets/H5.jpeg"),
  },
];

const HairTreatmentSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const leftRef = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-slider for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setSelectedIndex((prev) => (prev + 1) % specialties.length);
      }, 3000); // 3 sec per slide
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <Box sx={{ bgcolor: "#fefdfd", py: 10, px: { xs: 2, md: 8 } }}>
{isMobile ? (
  <Box>
    {/* Text above image for mobile */}
    <Box sx={{ textAlign: "center", mb: 3 }}>
      <Typography variant="h6" color="text.secondary" mb={1}>
        Expert Hair Care Solutions
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={3} color="red">
        Top Hair Treatments
      </Typography>
      <Typography variant="body1" mb={3}>
        Combat hair thinning, bald spots, and hair fall with proven,
        personalized treatments tailored to your scalp and hair type.
        Experience visible transformation with expert dermatologists.
      </Typography>
    </Box>

    {/* Image + selected treatment */}
    <Paper sx={{ overflow: "hidden", borderRadius: 3, boxShadow: 3 }}>
      <Box sx={{ height: 250 }}>
        <img
          src={specialties[selectedIndex].image}
          alt={specialties[selectedIndex].title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
          }}
        />
      </Box>
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary" mb={1}>
          Expert Hair Care Solutions
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={2} color="red">
          {specialties[selectedIndex].title}
        </Typography>
        <Typography variant="body1" mb={2}>
          {specialties[selectedIndex].description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ec2024",
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "#b5171a" },
          }}
          href="/service"
        >
          View More
        </Button>
      </Box>
    </Paper>
  </Box>
) : (

        // Desktop Layout: same as before
        <Grid container spacing={4}>
          {/* Left: Vertical slider */}
          <Grid size={{xs:12,md:5,sm:5}} >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxHeight: 500,
                overflowY: "auto",
              }}
            >
              {specialties.map((item, index) => (
                <Paper
                  key={item.id}
                  ref={(el) => (leftRef.current[index] = el)}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    cursor: "pointer",
                    p: 2,
                    backgroundColor:
                      selectedIndex === index ? "#ec2024" : "#fff",
                    color: selectedIndex === index ? "#fff" : "#000",
                    "&:hover": { transform: "scale(1.03)", transition: "0.3s" },
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Right: Content top + horizontal images bottom */}
          <Grid size={{xs:12,md:7,sm:6}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* Top Content */}
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h6" color="text.secondary" mb={1}>
                  Expert Hair Care Solutions
                </Typography>
                <Typography variant="h4" fontWeight="bold" mb={3} color="red">
                  Top Hair Treatments
                </Typography>
                <Typography variant="body1" mb={3}>
                  Combat hair thinning, bald spots, and hair fall with proven,
                  personalized treatments tailored to your scalp and hair type.
                  Experience visible transformation with expert dermatologists.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ec2024",
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    "&:hover": { backgroundColor: "#b5171a" },
                  }}
                  href="/services"
                >
                  View More
                </Button>
              </Box>

              {/* Bottom: Horizontal images */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  overflowX: "auto",
                  py: 2,
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {specialties.map((item, index) => (
                  <Paper
                    key={item.id}
                    onClick={() => setSelectedIndex(index)}
                    sx={{
                      minWidth: 150,
                      height: 120,
                      cursor: "pointer",
                      flexShrink: 0,
                      borderRadius: 2,
                      overflow: "hidden",
                      transform:
                        selectedIndex === index ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.3s",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default HairTreatmentSection;
