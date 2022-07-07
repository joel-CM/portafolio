import {
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutMe() {
  const color = useColorModeValue("teal.700", "teal");
  const titleColor = useColorModeValue("#99cc99", "#558855");

  return (
    <>
      <Grid
        id={"about-me"}
        templateColumns={"repeat(6, 1fr)"}
        justifyItems={"center"}
        alignItems={"center"}
        px={10}
        gap={[10, 10, 5, 5]}
        mb={10}
      >
        <GridItem colSpan={6} justifySelf={["center", "center", "end", "end"]}>
          <Heading py={"3rem"} textAlign={"center"} color={titleColor}>
            About me
          </Heading>
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 3]} alignSelf={"start"}>
          <Image
            borderRadius="full"
            boxSize={["250px", "250px", "400px", "400px"]}
            src="https://avatars.githubusercontent.com/u/84867719"
            alt="Joel Chavez"
          />
        </GridItem>

        <GridItem colSpan={[6, 6, 3, 3]}>
          <Text
            fontSize={["sm", "md", "lg", "xl"]}
            textAlign={"justify"}
            color={color}
          >
            <Text textAlign={"center"}>¡Hola!</Text>
            Soy Joel Chavez, apasionado por el desarrollo y la tecnología.
            Graduado tanto en henry como desarrollador web fullstack (
            <Link
              href="https://certificates.soyhenry.com/cert?id=07af09c2-da51-4de2-a078-c766009e9419"
              target={"_blank"}
              borderBottom={"0.5px solid teal.300"}
              color={"teal.300"}
            >
              link
            </Link>
            ) como en la UTN (
            <Link
              href="https://drive.google.com/file/d/1dNHsL-ds8tIXvL7IKx-mKHepR1KrTKff/view?usp=sharing"
              target={"_blank"}
              borderBottom={"0.5px solid teal.300"}
              color={"teal.300"}
            >
              link
            </Link>
            ).
            <br />
            Aunque que el desarrollo frontend también me gusta mucho, admito que
            estoy mas inclinado por el backend.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
