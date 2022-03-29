import { Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";

export default function AboutMe() {
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
          <Heading py={"3rem"} textAlign={"center"} color={"#99cc99"}>
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
            color={"teal.700"}
          >
            Bienvenido a mi portafolio, mi nombre es Joel Chavez (ARG), tengo 19
            años y soy un desarrollador web full stack. <br />
            <br />
            Mi pasión por el desarrollo web comenzó a mediados del 2020 en medio
            de la pandemia, y hoy (29/03/2022) mientras escribo esto estoy
            terminando el famoso Bootcamp de SoyHenry con una duración
            aproximada de 6 meses al cual le saque el máximo provecho. <br />
            <br />
            Soy una persona bastante autodidacta e incluso previo a mi ingreso a
            SoyHenry llegue a terminar un curso (desarrollador web full stack)
            en la UTN incluyendo varios más gratuitos online. <br />
            <br />
            Actualmente me sigo capacitando por mi cuenta y estoy aprendiendo
            NextJs (esta web está hecha en next y chakra-ui), también tengo
            pensado agregar a mis skills Python (backend). <br />
            <br />
            ¡Saludos!
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
