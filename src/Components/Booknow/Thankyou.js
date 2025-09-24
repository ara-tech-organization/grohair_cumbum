import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
    // Open popup when page loads
    setOpen(true);

    // ✅ Google Ads Conversion Tracking
    if (window.gtag) {
=======
    // ✅ Open popup when page loads
    setOpen(true);

    // ✅ Fire Google Ads Conversion Events
    if (window.gtag) {
      // Hair Leads (22/09/25) Conversion
      window.gtag("event", "conversion", {
        send_to: "AW-17577014731/AsQjCKaMzJ8bEMvrr71B",
        value: 500.0,
        currency: "INR",
      });

      // Existing Conversion
>>>>>>> gh-pages
      window.gtag("event", "conversion", {
        send_to: "AW-16777025590/dwI5CO7ah4QbELaw9L8-",
        value: 500.0,
        currency: "INR",
      });
    } else {
<<<<<<< HEAD
      console.warn("gtag not found — ensure it's loaded in index.html");
=======
      console.warn("⚠️ gtag not found — ensure Google tag is loaded in index.html");
>>>>>>> gh-pages
    }
  }, []);

  return (
<<<<<<< HEAD
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent sx={{ textAlign: "center", p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="green" gutterBottom>
=======
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
    >
      <DialogContent sx={{ textAlign: "center", p: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="green"
          gutterBottom
        >
>>>>>>> gh-pages
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your submission has been received.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "green",
            "&:hover": { bgcolor: "darkgreen" },
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYou;
