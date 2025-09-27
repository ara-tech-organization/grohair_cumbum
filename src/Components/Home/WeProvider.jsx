import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import AboutImage from "../assets/2.jpg";

// Styled wrapper for the whole section
const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
  backgroundColor: "#fff",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "0%",
  overflow: "hidden",
  margin: "0 auto",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  width: 520,
  height: 520,
  [theme.breakpoints.down("sm")]: {
    width: 280,
    height: 280,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 380,
    height: 380,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 460,
    height: 460,
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: 500,
    height: 500,
  },
}));

const AboutImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#212529",
  marginBottom: theme.spacing(2),
  fontSize: "2.7rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "2.6rem",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: "#6c757d",
  marginBottom: theme.spacing(2),
  fontSize: "1.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "1.15rem",
  },
}));

const AboutParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.05rem",
  lineHeight: 1.7,
  color: "#444",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.95rem",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "1.1rem",
  },
}));

export default function About() {
  return (
    <AboutSection>
      <Grid container alignItems="center" justifyContent="space-between" spacing={4} data-aos="fade-up">
        
        {/* Image */}
        <Grid size={{xs:12,lg:6,md:6}} textAlign="center">
          <ImageWrapper>
            <AboutImg src={AboutImage} alt="Grohair & Gloskin Cumbum" />
          </ImageWrapper>
        </Grid>

        {/* Text Content */}
        <Grid size={{xs:12,lg:6,md:6}}>
          <Box width="100%">
            <SectionTitle>Glow From Within</SectionTitle>
            <SectionSubtitle>
              At <strong>Grohair & Gloskin Cumbum</strong>, we blend clinical expertise with aesthetic finesse to restore your confidence — from root to radiance.
            </SectionSubtitle>
            <AboutParagraph>
              Our treatments are customized to your unique hair and skin needs. Whether you're facing <strong>hair loss</strong>, <strong>acne scars</strong>, or just want a glow-up — we’ve got you covered with advanced techniques like <strong>PRP therapy</strong>, <strong>chemical peels</strong>, and more.
            </AboutParagraph>
          </Box>
          <Box
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left" }, // center on phone & tablet
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9181d",
                borderRadius: "50px",
                px: 4,
                py: 1.2,
                mt: 3,
                "&:hover": { backgroundColor: "#e51920" },
              }}
              href="/services"
            >
              View Treatments
            </Button>
          </Box>
        </Grid>
      </Grid>
    </AboutSection>
  );
}
