import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bgimage from "../assets/pattern-randomized.png";
const growHairFaqs = [
  {
    q: "How does Grohair treatment work?",
    a: "Our GrowHair therapy stimulates hair follicles for natural regrowth using advanced techniques like PRP, Mesotherapy, and Hair Transplant methods.",
  },
  {
    q: "Is Grohair suitable for all hair types?",
    a: "Yes, our treatments are suitable for most hair types. Book a consultation with our experts to receive personalized recommendations.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results may vary, but most clients notice visible improvements within 4 to 6 weeks of starting regular sessions.",
  },
  {
    q: "Are the results permanent?",
    a: "Hair transplant results are permanent as the transplanted follicles come from areas resistant to hair loss. Maintenance treatments like PRP may be recommended for ongoing care.",
  },
  {
    q: "What is PRP therapy, and how does it help with hair loss?",
    a: "PRP (Platelet-Rich Plasma) therapy involves drawing your blood, processing it to concentrate growth factors, and injecting it into your scalp to stimulate hair regrowth.",
  },
];

const gloSkinFaqs = [
  {
    q: "What is GloSkin facial treatment?",
    a: "GloSkin provides deep cleansing, exfoliation, hydration, and rejuvenation to give your skin a healthy, radiant glow.",
  },
  {
    q: "How often should I get a GloSkin facial?",
    a: "We recommend facials every 3 to 4 weeks to maintain skin health, prevent breakouts, and keep your skin glowing.",
  },
  {
    q: "Are GloSkin treatments safe for sensitive skin?",
    a: "Absolutely! Our treatments are customized to suit your skin type, including sensitive skin, ensuring comfort and safety.",
  },
  {
    q: "Do you offer treatments for acne and pigmentation?",
    a: "Yes, we offer advanced solutions for acne, pigmentation, and uneven skin tone, tailored to your specific concerns.",
  },
  {
    q: "Is laser hair removal available at GloSkin?",
    a: "Yes! We use FDA-approved laser technology for long-term hair reduction that’s safe for all skin types.",
  },
];

const FAQSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const accordionStyle = {
    "&.Mui-expanded": {
      backgroundColor: "#ffe6e9",
      color: "#dc3545",
    },
    "& .MuiAccordionSummary-root": {
      fontWeight: 500,
      fontSize: "0.95rem",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      color: "#dc3545",
    },
  };

  return (
    <Box 
      sx={{
        py: 4,
        backgroundColor: "#f7fafd",
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        
      }}
    >
      <Container data-aos="fade-up">
        <Typography  variant="h6" color="text.secondary" align="center" mb={3}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h4" fontWeight={600} align="center" mb={10}>
          Got Questions?
        </Typography>

        {/* Make columns equal height */}
        <Grid container spacing={10} alignItems="stretch" data-aos="fade-up">
          {/* LEFT - GroHair */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box data-aos="fade-up" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h5"
                fontWeight={600}
                color="error"
                align="center"
                mb={3}
                mt={-5}
              >
                Grohair
              </Typography>
              <Box sx={{ flex: 1 }}>
                {growHairFaqs.map((faq, index) => (
                  <Accordion key={index} sx={accordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {faq.q}
                    </AccordionSummary>
                    <AccordionDetails>{faq.a}</AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* RIGHT - GloSkin */}
          <Grid data-aos="fade-up"
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h5"
                fontWeight={600}
                color="error"
                align="center"
                mb={3}
                mt={-5}
              >
                GloSkin
              </Typography>
              <Box sx={{ flex: 1 }}>
                {gloSkinFaqs.map((faq, index) => (
                  <Accordion key={index} sx={accordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {faq.q}
                    </AccordionSummary>
                    <AccordionDetails>{faq.a}</AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={5} textAlign="center" data-aos="fade-up">
          <Typography variant="body2" color="text.secondary">
            Still can’t find what you are looking for? Don’t worry, contact our
            support team.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
