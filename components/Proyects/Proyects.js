import CardProyect from "../CardProyect/CardProyect";
import { Box, Flex, Heading } from "@chakra-ui/react";
g
export default function Proyects(props) {
  return (
    <Box px={10}>
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
          title={"Gamerland"}
          link={"https://gamerland.vercel.app"}
          info={`
          Gamerland es un desarrollador y fabricante líder mundial de equipos y tecnología de alto rendimiento para jugadores, creadores de contenido y entusiastas de la PC. Desde componentes y periféricos de PC galardonados hasta equipos de transmisión premium e iluminación ambiental inteligente, Gamerland ofrece un ecosistema completo de productos que funcionan juntos para permitir que todos, desde jugadores casuales hasta profesionales comprometidos, rindan al máximo. Gamerland también incluye las marcas subsidiarias Logitech, Hyperx, Razer, Corsair, Samsung y otras marcas de juegos.`}
        />
        <CardProyect
          img={"google.png"}
          title={"Title-2"}
          link={"#"}
          info={"chauuuuuuuuuuuuuuuuuuuuuuuuuu"}
        />
        <CardProyect
          img={"joel.png"}
          title={"Title-1"}
          link={"#"}
          info={"holaaaaaaaaaaaaaaaaa"}
        />
        <CardProyect
          img={"google.png"}
          title={"Title-2"}
          link={"#"}
          info={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        harum labore tenetur minima non architecto commodi vero nulla unde amet
        illum aperiam animi pariatur repellendus laborum voluptatum tempora, eum
        recusandae! Quae, cum! Eum cupiditate eligendi dicta earum quae maiores
        perspiciatis facilis ea sunt soluta consequuntur iure, esse, aliquid
        vero, ad laudantium molestiae quisquam excepturi quibusdam voluptatibus
        id velit deleniti aspernatur.`}
        />
      </Flex>
    </Box>
  );
}
