import React, { useState } from "react";
import { Box, Button, Typography, useTheme, useMediaQuery, Grid, CardContent } from "@mui/material";
import { styled } from "@mui/system";

// ✅ Imported images
import skinBrightening from "../assets/s1.png";
import qSwitch from "../assets/s2.png";
import hydrafacial from "../assets/s3.jpeg";
import hairLaser from "../assets/s4.jpeg";
import rf from "../assets/s5.jpeg";
import botox from "../assets/H3.jpeg";
import micro from "../assets/s2.png";
import wartRemoval from "../assets/2.jpg";

import scalpMicropigmentation from "../assets/H1.jpeg";
import eyebrowTransplant from "../assets/H2.jpeg";
import stemXPro from "../assets/H3.jpeg";
import mesotherapy from "../assets/H4.jpeg";
import oxygenLaserTherapy from "../assets/H5.jpeg";

// Styled MUI Button
const TabButton = styled(Button)(({ theme }) => ({
  background: "#eee",
  color: "#333",
  borderRadius: "50px",
  fontWeight: 600,
  padding: "10px 25px",
  textTransform: "none",
  transition: "0.3s ease",
  "&:hover": {
    background: "#ddd",
  },
  "&.active": {
    backgroundColor: "#ec2024",
    color: "#fff",
  },
}));

// Fade animation for pane
const TabPane = styled(Box)({
  display: "none",
  animation: "fadeIn 0.3s ease-in-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "&.active": {
    display: "block",
  },
});

// Service Card
const ServiceCard = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  width: "100%",
  height: "100%",   // ✅ full height
  maxWidth: 320,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  textAlign: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
  },
}));

// Service Image
const ServiceImage = styled("img")({
  width: "100%",
  height: 200,   // ✅ fixed height so all cards align
  objectFit: "cover",
});

// ✅ Services data with imported images
const skinServices = [
  { img: skinBrightening, title: "Skin Brightening Treatment", desc: "Reduce tanning and dullness to reveal a clearer, even-toned complexion." },
  { img: qSwitch, title: "Q-Switch", desc: "Laser precision treatment for pigmentation, melasma, and sun damage." },
  { img: hydrafacial, title: "Hydra Facial", desc: "Deep exfoliation and hydration for a radiant and refreshed look." },
  { img: hairLaser, title: "Laser Hair Removal", desc: "Long-lasting hair reduction with advanced laser technology." },
  { img: rf, title: "RF Anti Aging Facial", desc: "Tightens skin and smooths wrinkles using radio frequency tech." },
  { img: botox, title: "Botox", desc: "Reduces lines and wrinkles for a youthful, smoother appearance." },
  { img: micro, title: "Microblading", desc: "Semi-permanent brow sculpting for bold, natural-looking arches." },
  { img: wartRemoval, title: "Wart Removal", desc: "Safe and effective removal of warts and skin tags with minimal scarring." },
];

const hairServices = [
  { img: scalpMicropigmentation, title: "Scalp MicroPigmentation", desc: "Replicates natural follicles for a fuller scalp look — ideal for bald spots." },
  { img: eyebrowTransplant, title: "Eyebrow Transplantation", desc: "Restores fuller, symmetrical brows using hair follicle transplants." },
  { img: stemXPro, title: "Stem X Pro", desc: "Stem cell-enriched formula to boost hair regrowth and follicle health." },
  { img: mesotherapy, title: "Meso Therapy", desc: "Injects nutrients into the scalp to nourish roots and reduce hair fall." },
  { img: oxygenLaserTherapy, title: "Oxygen Laser Therapy", desc: "Combines oxygen infusion with laser energy to improve scalp health." },
];

export default function GroServicesTabs() {
  const [activeTab, setActiveTab] = useState("skin");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const renderCircleCards = (data) => (
    <Grid container spacing={2} justifyContent="center">
      {data.map((service, i) => (
        <Grid
          key={i}
          size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
          display="flex"
          justifyContent="center"
          mb={2}
        >
          <ServiceCard>
            <ServiceImage src={service.img} alt={service.title} />
            <CardContent sx={{ p: 2 }}>
              <Typography
                fontSize={{ lg: "1.2rem", sm: "1.1rem", xs: "0.9rem" }}
                fontWeight={600}
                color="#212529"
                gutterBottom
              >
                {service.title}
              </Typography>
              <Typography
                color="#6c757d"
                fontSize={{ lg: "0.9rem", sm: "0.8rem", xs: "0.6rem" }}
                px={1}
              >
                {service.desc}
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* Section Heading */}
      <Typography
        component="h2"
        className="groservices-title text-center fw-bold mb-5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 5,
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
        }}
      >
        Our Services
      </Typography>

      {/* Tab Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          mb: 4,
        }}
      >
        <TabButton
          className={activeTab === "skin" ? "active" : ""}
          onClick={() => setActiveTab("skin")}
        >
          Skin Services
        </TabButton>
        <TabButton
          className={activeTab === "hair" ? "active" : ""}
          onClick={() => setActiveTab("hair")}
        >
          Hair Services
        </TabButton>
      </Box>

      {/* Skin Tab */}
      <TabPane className={activeTab === "skin" ? "active" : ""}>
        {renderCircleCards(skinServices)}
      </TabPane>

      {/* Hair Tab */}
      <TabPane className={activeTab === "hair" ? "active" : ""}>
        {renderCircleCards(hairServices)}
      </TabPane>
    </Box>
  );
}
