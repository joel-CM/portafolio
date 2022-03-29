import {
  Show,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter();

  return (
    <Show breakpoint="(max-width: 770px)">
      <Flex h={"full"} alignItems={"center"}>
        <Menu colorScheme={"teal"}>
          {({ isOpen }) => (
            <>
              <MenuButton as={Button} color={"teal"}>
                {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </MenuButton>

              <MenuList bgColor={"#efffef"} border={"0.1px solid teal"}>
                <MenuItem
                  color={"teal"}
                  _hover={{ background: "#aaddaa", color: "#efffef" }}
                  onClick={() => router.push("/")}
                >
                  Home
                </MenuItem>
                <MenuItem
                  color={"teal"}
                  _hover={{ background: "#aaddaa", color: "#efffef" }}
                  onClick={() =>
                    router.push("http://localhost:3000/#tech-skills")
                  }
                >
                  Tech Skills
                </MenuItem>
                <MenuItem
                  color={"teal"}
                  _hover={{ background: "#aaddaa", color: "#efffef" }}
                  onClick={() => router.push("http://localhost:3000/#projects")}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  color={"teal"}
                  _hover={{ background: "#aaddaa", color: "#efffef" }}
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Show>
  );
}
