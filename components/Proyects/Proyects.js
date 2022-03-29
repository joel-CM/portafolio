import CardProyect from "../CardProyect/CardProyect";
import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Proyects(props) {
  return (
    <Box px={10} id={"projects"}>
      <Heading
        py={"3rem"}
        textAlign={["center", "center", "start", "start"]}
        color={"#99cc99"}
      >
        My Proyects
      </Heading>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"center"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        <CardProyect
          img={"gamerland.jpeg"}
          title={"Gamerland (proyecto grupal académico)"}
          link={"https://gamerland.vercel.app"}
          info={`
          Gamerland es un desarrollador y fabricante líder mundial de equipos y tecnología de alto rendimiento para jugadores, creadores de contenido y entusiastas de la PC. Desde componentes y periféricos de PC galardonados hasta equipos de transmisión premium e iluminación ambiental inteligente, Gamerland ofrece un ecosistema completo de productos que funcionan juntos para permitir que todos, desde jugadores casuales hasta profesionales comprometidos, rindan al máximo. Gamerland también incluye las marcas subsidiarias Logitech, Hyperx, Razer, Corsair, Samsung y otras marcas de juegos.`}
        />
        <CardProyect
          img={"pi-dog.jpeg"}
          title={"Proyecto Individual Académico"}
          link={"http://pi-dog-front.herokuapp.com"}
          info={`Este es un proyecto individual académico hecho durante el bootcamp de SoyHenry. El proyecto trata con una temática sobre perros, la aplicación web ofrece información detallada sobre las distintas razas existentes, tambíen cuenta con filtros y un campo de busqueda que mejoran la experiencia. Además, brindando la información necesaria es posible 'crear' tus propias razas y visualizarlas dentro de la aplicación.`}
        />
      </Flex>
    </Box>
  );
}
