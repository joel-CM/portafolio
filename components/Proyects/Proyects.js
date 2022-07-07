import CardProyect from "../CardProyect/CardProyect";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Proyects(props) {
  const titleColor = useColorModeValue("#99cc99", "#558855");

  return (
    <Box px={10} id={"projects"}>
      <Heading
        py={"3rem"}
        textAlign={["center", "center", "start", "start"]}
        color={titleColor}
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
        <CardProyect
          img={"weatherapp.jpeg"}
          title={"Weather App"}
          link={"https://joelcm-weatherapp.vercel.app/"}
          info={`Weather App es una mini aplicación web, donde podrás ver al detalle la información meteorológica de todas las ciudades más importantes de la Argentina.`}
        />
        <CardProyect
          img={"noteblog.png"}
          title={"Noteblog"}
          link={"https://noteblogfront.herokuapp.com/home"}
          info={`Este proyecto es una aplicación web, como un blog de notas tradicional con un sistema de inicio de sesión.`}
        />
        <CardProyect
          img={"kimche.png"}
          title={"kimchechallenge"}
          link={"https://joelcm-kimchechallenge.vercel.app/"}
          info={`Este proyecto es el resultado de un challenge, el cual basicamente en un buscador de paises hecho con React y GraphQL.`}
        />
      </Flex>
    </Box>
  );
}
