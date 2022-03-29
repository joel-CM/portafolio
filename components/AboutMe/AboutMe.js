import { Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Grid
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat
            ad necessitatibus, minima soluta accusamus laudantium! Iure, ad.
            Beatae nesciunt quam cumque sunt itaque porro quod! Eveniet
            voluptatibus eligendi provident! Voluptate, in voluptas eligendi
            dolores, vitae cum est similique recusandae omnis error, velit
            corporis autem reprehenderit debitis quis fugiat iusto. Aut quos eos
            similique consequatur magnam ipsam cum autem. Quae. Earum nam
            suscipit cupiditate repellat, nesciunt perferendis inventore! Minima
            necessitatibus accusantium iure sed officiis repellendus, id dolorum
            autem consequuntur perspiciatis culpa asperiores saepe perferendis
            delectus ab praesentium eaque dolor illum. Dicta non neque
            cupiditate minus ipsam fuga dignissimos harum laborum cumque odio
            laudantium assumenda dolorem esse, iste iure ratione natus rem in,
            amet ad repellendus, asperiores eos! Voluptate, deserunt dolorum?
            Cum sapiente quam nisi molestias ducimus temporibus quia officiis
            ullam adipisci neque iste quisquam itaque nemo, iure ad dolores
            eveniet minus quos provident, reprehenderit fugiat modi atque
            dolorum? Libero, pariatur.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
