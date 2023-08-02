import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box px={{ base: 3, md: 5 }} py={{ base: 0, md: 5 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
