import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Divider,
  Paper,
  Stack,
<<<<<<< HEAD
=======
  FormControl,
  InputLabel,
  Select,
>>>>>>> gh-pages
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PRIMARY = "#ec2024";

const theme = createTheme({
  palette: {
    primary: { main: PRIMARY },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 20,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

function ContactInfoBox({ icon, text, href }) {
  return (
    <Stack
      component="a"
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      alignItems="center"
      spacing={1}
      sx={{
        flex: 1,
        textAlign: "center",
        fontSize: { xs: 14, sm: 15 },
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        "&:hover": { color: "#ec2024" },
      }}
    >
      <Box sx={{ color: "#ec2024", "& svg": { fontSize: 28 } }}>{icon}</Box>
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
}

function ContactForm() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    phone: "",
    timeSlot: "",
    treatment: "",
<<<<<<< HEAD
    message: "",
=======
    // message: "",
>>>>>>> gh-pages
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

<<<<<<< HEAD
    try {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mobile: values.phone,
        date: values.date,
        time: values.timeSlot,
        treatment: values.treatment || "General", // default treatment if empty
      };

      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/naturalsAppoinment",
=======
    const payload = {
      FirstName: values.firstName,
      LastName: values.lastName,
      Email: values.email,
      Mobile: values.phone,
      Date: values.date,
      Time: values.timeSlot,
      Treatment: values.treatment || "General",
    };

    try {
      const res = await fetch(
        "https://my-node-backend-cwdwchb2e2hyawa7.centralindia-01.azurewebsites.net/api/naturalsAppointment",
>>>>>>> gh-pages
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
<<<<<<< HEAD
            Authorization: "Bearer 123",
=======
>>>>>>> gh-pages
          },
          body: JSON.stringify(payload),
        }
      );

<<<<<<< HEAD
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API response:", result);
      alert("Thanks! Your appointment has been booked successfully.");

      setValues({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        phone: "",
        timeSlot: "",
        treatment: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
=======
      if (res.ok) {
        alert("✅ Your appointment has been booked successfully!");
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          phone: "",
          timeSlot: "",
          treatment: "",
          message: "",
        });
      } else {
        const errorText = await res.text();
        console.error("Booking failed:", errorText);
        alert("❌ Failed to book appointment. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong. Please check your connection.");
>>>>>>> gh-pages
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    "8 AM - 9 AM",
    "9 AM - 10 AM",
    "10 AM - 11 AM",
    "11 AM - 12 PM",
    "12 PM - 1 PM",
    "1 PM - 2 PM",
    "2 PM - 3 PM",
    "3 PM - 4 PM",
    "4 PM - 5 PM",
    "5 PM - 6 PM",
    "6 PM - 7 PM",
    "7 PM - 8 PM",
  ];

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {/* First Row */}
      <Grid container spacing={5} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            required
<<<<<<< HEAD
            // label="First Name *"
=======
>>>>>>> gh-pages
            placeholder="Enter first name"
            fullWidth
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            required
<<<<<<< HEAD
            // label="Last Name *"
=======
>>>>>>> gh-pages
            placeholder="Enter last name"
            fullWidth
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            required
            type="email"
<<<<<<< HEAD
            // label="Email Address *"
=======
>>>>>>> gh-pages
            placeholder="Enter your email"
            fullWidth
            value={values.email}
            onChange={handleChange("email")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            required
            type="date"
            fullWidth
            value={values.date}
            onChange={handleChange("date")}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputBase-input": {
<<<<<<< HEAD
                fontFamily: "Poppins, sans-serif", // 👈 always Poppins
                color: values.date === "" ? "#adadadff" : "inherit", // gray if empty
                // fontStyle: values.date === "" ? "italic" : "normal",
=======
                fontFamily: "Poppins, sans-serif",
                color: values.date === "" ? "#adadadff" : "inherit",
>>>>>>> gh-pages
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Phone */}
      <Grid container spacing={5} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
            required
            type="tel"
<<<<<<< HEAD
            // label="Phone *"
=======
>>>>>>> gh-pages
            placeholder="Enter your phone number"
            fullWidth
            value={values.phone}
            onChange={handleChange("phone")}
          />
        </Grid>
      </Grid>

      {/* Time Slot */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
            select
            required
            fullWidth
            value={values.timeSlot}
            onChange={handleChange("timeSlot")}
            SelectProps={{ displayEmpty: true }}
            sx={{
              "& .MuiSelect-select": {
<<<<<<< HEAD
                fontFamily: "Poppins, sans-serif", // 👈 always Poppins
                color: values.timeSlot === "" ? "#adadadff" : "inherit", // gray if empty
                // fontStyle: values.timeSlot === "" ? "italic" : "normal",
=======
                fontFamily: "Poppins, sans-serif",
                color: values.timeSlot === "" ? "#adadadff" : "inherit",
>>>>>>> gh-pages
              },
            }}
          >
            <MenuItem value="" disabled>
              Choose a time slot
            </MenuItem>
            {timeSlots.map((slot) => (
              <MenuItem key={slot} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Treatment */}
<<<<<<< HEAD
      <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
            // label="Treatment"
            placeholder="Enter treatment type"
            fullWidth
            value={values.treatment}
            onChange={handleChange("treatment")}
          />
        </Grid>
      </Grid>

      {/* Message */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
            // label="Message"
=======
     <Grid container spacing={3} sx={{ mt: 6 }}>
  <Grid size={{ xs: 12 }}>
    <TextField
      select
      required
      fullWidth
      value={values.treatment}
      onChange={handleChange("treatment")}
      SelectProps={{ displayEmpty: true }}
      sx={{
        "& .MuiSelect-select": {
          fontFamily: "Poppins, sans-serif",
          color: values.treatment === "" ? "#adadadff" : "inherit",
        },
      }}
    >
      <MenuItem value="" disabled>
        Choose a treatment
      </MenuItem>
      <MenuItem value="Facial">Facial</MenuItem>
      <MenuItem value="Hair Treatment">Hair Treatment</MenuItem>
      <MenuItem value="Skin Peel">Skin Peel</MenuItem>
    </TextField>
  </Grid>
</Grid>


      {/* Message */}
      {/* <Grid container spacing={3} sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <TextField
>>>>>>> gh-pages
            placeholder="Leave us a message..."
            fullWidth
            multiline
            minRows={4}
            value={values.message}
            onChange={handleChange("message")}
          />
        </Grid>
<<<<<<< HEAD
      </Grid>
=======
      </Grid> */}
>>>>>>> gh-pages

      <Box textAlign="right" mt={6}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          endIcon={<span aria-hidden>→</span>}
          sx={{
            px: 3,
            py: 1.2,
            fontWeight: 600,
            boxShadow: "none",
            ":hover": { backgroundColor: "#c2181b" },
          }}
        >
          {loading ? "Submitting..." : "Submit Form"}
        </Button>
      </Box>
    </Box>
  );
}

export default function ContactSection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="section" sx={{ py: { xs: 5, md: 6 } }}>
        <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
          <Typography
            component="h2"
            variant="h4"
            align="center"
            fontWeight={600}
            sx={{ color: PRIMARY, mb: 3 }}
          >
            Let’s Get In Touch
          </Typography>

          <Grid
            container
            spacing={2.5}
            alignItems="stretch"
            justifyContent="space-between"
            sx={{ mb: 3, textAlign: "center" }}
          >
            <Grid size={{ xs: 12, sm: 4, lg: 4 }}>
              <ContactInfoBox
                icon={<PhoneIcon />}
<<<<<<< HEAD
                text="+9962556789"
                href="tel:+9962556789"
=======
                text="+91 962556789"
                href="tel:+91 962556789"
>>>>>>> gh-pages
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4, lg: 4 }}>
              <ContactInfoBox
                icon={<EmailIcon />}
                text="adgrohaircbm@gmail.com"
                href="mailto:adgrohaircbm@gmail.com"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4, lg: 4 }}>
              <ContactInfoBox
                icon={<LocationOnIcon />}
                text={
                  <a
                    href="https://maps.app.goo.gl/GQ71mALQbhEBbyvw9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    First Floor, LF Rd, Opp Urban Hospital, Nethaji Nagar,
                    Pathirakaliamman Kovil, Cumbum, Tamil Nadu 625516
                  </a>
                }
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, backgroundColor: "#ccc" }} />

          <Paper
            elevation={0}
            sx={{
              maxWidth: 850,
              mx: "auto",
              p: { xs: 2.5, sm: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0 0 30px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
            }}
          >
            <ContactForm />
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
