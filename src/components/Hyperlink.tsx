import { Icon, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Hyperlink = () => {
  return (
    <Link href="https://rawg.io/" isExternal>
      <Text align="center" fontSize="xs">
        All data and images attributed to Rawg.io{" "}
        <Icon as={FaExternalLinkAlt} />
      </Text>{" "}
    </Link>
  );
};

export default Hyperlink;
