import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { useLocation, Link } from "react-router-dom";
import Logo from "./assets/logo.jpg";

// Styled Components
const LogoImg = styled("img")({
  height: "60px",
  width: "auto",
  objectFit: "contain",
  verticalAlign: "middle",
});

const NavLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  position: "relative",
  color: "#444",
  textDecoration: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#ec2024",
    transform: "translateY(-2px)",
  },
  "&.active": {
    color: "#ec2024",
    fontWeight: 600,
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      backgroundColor: "#ec2024",
      left: 0,
      bottom: -6,
    },
  },
}));

const ScrollbarStyles = styled("div")`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ec2024;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ba0c1d;
  }
`;

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // ⬅ Only xs & sm use drawer
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <ScrollbarStyles>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LogoImg src={Logo} alt="Grohair & Gloskin Logo" />
          </Box>

          {/* Desktop Menu (md & lg) */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  component={Link}
                  to={item.to}
                  className={location.pathname === item.to ? "active" : ""}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Book Now */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#c9181d",
                  borderRadius: "30px",
                  px: 3,
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#e51920" },
                  ml: 2,
                }}
                component={Link}
                to="/booknow"
              >
                Book Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    color: location.pathname === item.to ? "#ec2024" : "#444",
                    fontWeight: location.pathname === item.to ? 600 : 500,
                    borderBottom:
                      location.pathname === item.to
                        ? "2px solid #ec2024"
                        : "none",
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Book Now Mobile */}
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
          </List>
        </Box>
      </Drawer>
    </ScrollbarStyles>
  );
}
