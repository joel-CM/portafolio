import { Flex, Heading } from "@chakra-ui/react";

export default () => {
  return (
    <Flex h={"60vh"} justifyContent={"center"} alignItems={"center"}>
      <Heading color={"tomato"}>
        404: La url no existe!
      </Heading>
    </Flex>
  );
};
