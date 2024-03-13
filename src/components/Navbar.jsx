import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/logo2.png";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#bfbfbf", // Light grey color
            borderBottom: "3px solid #fff", // White color
          }}
        >
          Home{" "}
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#bfbfbf" }} // Light grey color
        >
          {" "}
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};
