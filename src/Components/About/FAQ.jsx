import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Grid,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const grohairFaqs = [
  {
    q: "How does Grohair treatment work?",
    a: "Our Grohair therapy stimulates hair follicles for natural regrowth using advanced techniques like PRP, Mesotherapy, and Hair Transplant methods."
  },
  {
    q: "Is Grohair suitable for all hair types?",
    a: "Yes, our treatments are suitable for most hair types. Book a consultation with our experts to receive personalized recommendations."
  },
  {
    q: "How long does it take to see results?",
    a: "Results may vary, but most clients notice visible improvements within 4 to 6 weeks of starting regular sessions."
  },
  {
    q: "Are the results permanent?",
    a: "Hair transplant results are permanent as the transplanted follicles come from areas resistant to hair loss. Maintenance treatments like PRP may be recommended for ongoing care."
  },
  {
    q: "What is PRP therapy, and how does it help with hair loss?",
    a: "PRP (Platelet-Rich Plasma) therapy involves drawing your blood, processing it to concentrate growth factors, and injecting it into your scalp to stimulate hair regrowth."
  },
  {
    q: "Is the procedure painful?",
    a: "Most procedures are well-tolerated with minimal discomfort. Local anesthesia is provided when necessary to ensure a comfortable experience."
  },
  {
    q: "Are there any side effects of Grohair treatments?",
    a: "Our treatments are safe and clinically tested. Some clients may experience mild redness or temporary shedding, which typically resolves quickly."
  },
  {
    q: "How much does Grohair treatment cost?",
    a: "Pricing depends on the type of treatment, number of grafts, and your hair restoration goals. Book a consultation for a detailed estimate tailored to you."
  },
  {
    q: "Who performs the treatments at Grohair?",
    a: "All treatments are carried out by certified specialists with expertise in hair restoration procedures, ensuring professional care and excellent results."
  },
  {
    q: "How do I book an appointment?",
    a: "Booking is simple — visit our website, call the clinic, or walk in to schedule your consultation with our experts."
  }
];

const gloskinFaqs = [
  {
    q: "What is GloSkin facial treatment?",
    a: "GloSkin provides deep cleansing, exfoliation, hydration, and rejuvenation to give your skin a healthy, radiant glow."
  },
  {
    q: "How often should I get a GloSkin facial?",
    a: "We recommend facials every 3 to 4 weeks to maintain skin health, prevent breakouts, and keep your skin glowing."
  },
  {
    q: "Are GloSkin treatments safe for sensitive skin?",
    a: "Absolutely! Our treatments are customized to suit your skin type, including sensitive skin, ensuring comfort and safety."
  },
  {
    q: "Do you offer treatments for acne and pigmentation?",
    a: "Yes, we offer advanced solutions for acne, pigmentation, and uneven skin tone, tailored to your specific concerns."
  },
  {
    q: "Is laser hair removal available at GloSkin?",
    a: "Yes! We use FDA-approved laser technology for long-term hair reduction that’s safe for all skin types."
  },
  {
    q: "How many sessions are needed for laser hair removal?",
    a: "Typically, 6 to 8 sessions are recommended for optimal, long-lasting results, depending on your skin and hair type."
  },
  {
    q: "Do you provide anti-aging treatments?",
    a: "Yes, we offer anti-aging treatments like Botox, fillers, collagen boosters, and skin tightening to restore youthful, radiant skin."
  },
  {
    q: "What skincare products do you recommend for home use?",
    a: "We recommend dermatologist-approved cleansers, moisturizers, and sunscreens tailored to your skin’s needs. Our team will help guide your daily routine."
  },
  {
    q: "Are there any side effects to GloSkin treatments?",
    a: "Most treatments are safe with minimal side effects, like mild redness or temporary sensitivity. We’ll provide aftercare advice for the best results."
  },
  {
    q: "How can I book an appointment with GloSkin?",
    a: "Booking is easy! Schedule online, call our clinic, or visit in person for a personalized skin consultation with our experts."
  }
];

const FAQSection = () => {
  const renderFaqs = (faqs) =>
    faqs.map((item, index) => (
      <Accordion key={index} sx={{ mb: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.q}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            {item.a}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ));

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textAlign="center"
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Got Questions?
        </Typography>

        <Grid container spacing={6} textAlign={"center"}>
          <Grid size={{xs:12 , md:6}} >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="error"
              textAlign="center"
              mb={4}
            >
              Grohair
            </Typography>
            {renderFaqs(grohairFaqs)}
          </Grid>

         <Grid size={{xs:12 , md:6}} >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="error"
              textAlign="center"
              mb={4}
            >
              GloSkin
            </Typography>
            {renderFaqs(gloskinFaqs)}
          </Grid>
        </Grid>

        <Box mt={5} textAlign="center">
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