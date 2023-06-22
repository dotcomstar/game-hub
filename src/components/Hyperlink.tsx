import { Link, Text } from "@chakra-ui/react";

const Hyperlink = () => {
  return (
    <Link as="button" href="https://rawg.io/" isExternal>
      <Text fontSize="xs">All data and images attributed to Rawg.io</Text>
    </Link>
  );
};

export default Hyperlink;
