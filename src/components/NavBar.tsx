import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Hyperlink from "./Hyperlink";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={{ base: "8px", md: "12px" }} pb={0}>
      <Link to="/">
        <Image maxWidth="none" src={logo} boxSize="60px" objectFit="fill" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      <Hyperlink />
    </HStack>
  );
};

export default NavBar;
