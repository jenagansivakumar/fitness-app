import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        {" "}
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        No Nonsense <br /> Results!
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most efficient way to achieve your goals
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <img
        src={HeroBannerImage}
        alt="hero banner image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
