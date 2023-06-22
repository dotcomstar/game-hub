import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import Hyperlink from "./Hyperlink";

const NavBar = () => {
  return (
    <HStack padding="12px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <Hyperlink />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
