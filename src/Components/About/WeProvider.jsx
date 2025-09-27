import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../assets/2.jpg";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
      }}
    >
      <Container data-aos="fade-up">
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: "center", lg: "flex-start" }}
        >
          {/* LEFT - Text */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#212529"
              mb={3}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Journey to Confidence & Care
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              At <strong>Grohair & Gloskin Cumbum</strong>, our mission goes
              beyond beauty — we restore self-esteem through expert skin and
              hair care treatments backed by science, empathy, and results.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              We began with a vision: to bring metro-level aesthetic solutions
              to Cumbum without compromising on quality. Today, we're a
              trusted destination for transformative services like{" "}
              <strong>Hair Transplants, PRP Therapy, HydraFacials</strong>, and
              more.
            </Typography>

            {/* Features List */}
            <List sx={{ p: 0 ,ml:{sm:10,md:25,lg:0}}} >
              <ListItem sx={{ p: 0, mb: 1 }} >
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <CheckCircleIcon sx={{ color: "#ec2024" }} />
                </ListItemIcon>
                <ListItemText
                  primary="International-grade equipment & FDA-approved technology"
                  primaryTypographyProps={{ fontSize: "1rem" }}
                />
              </ListItem>

              <ListItem sx={{ p: 0, mb: 1 }}>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <CheckCircleIcon sx={{ color: "#ec2024" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Customised treatments tailored to your skin & scalp profile"
                  primaryTypographyProps={{ fontSize: "1rem" }}
                />
              </ListItem>

              <ListItem sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <CheckCircleIcon sx={{ color: "#ec2024" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Led by certified trichologists & skin therapists"
                  primaryTypographyProps={{ fontSize: "1rem" }}
                />
              </ListItem>
            </List>

            {/* Button */}
           <Button
  variant="contained"
  href="/booknow"   // ✅ direct link
  sx={{
    backgroundColor: "#ec2024",
    borderRadius: "50px",
    px: 4,
    py: 1.5,
    mt: 4,
    "&:hover": {
      backgroundColor: "#c21a1d",
    },
  }}
>
  Book Your Free Consultation
</Button>

          </Grid>

          {/* RIGHT - Image */}
          <Grid
            size={{ xs: 12, lg: 6 }}
             mt={8}
          >
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                height: { xs: "auto", md: "400px" ,sm:'50%'},
                width:{sm:'100%'}
              }}
            >
              <Box
                component="img"
                src={img1}
                alt="Grohair & Gloskin Team"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  textAlign: "center",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
