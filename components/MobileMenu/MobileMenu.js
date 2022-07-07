import {
  Show,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter();
  const bg = useColorModeValue("#efffef", "#223322");
  const bgHover = useColorModeValue("#aaddaa", "#445544");
  const color = useColorModeValue("teal", "teal.200");
  const close = useColorModeValue("teal", "#efffef");

  return (
    <Show breakpoint="(max-width: 770px)">
      <Flex h={"full"} alignItems={"center"}>
        <Menu colorScheme={"blue"}>
          {({ isOpen }) => (
            <>
              <MenuButton as={Button} color={"teal"}>
                {isOpen ? (
                  <AiOutlineClose color={close} />
                ) : (
                  <GiHamburgerMenu color={close} />
                )}
              </MenuButton>

              <MenuList bgColor={bg} border={"0.1px solid teal"}>
                <MenuItem
                  color={color}
                  _hover={{ background: bgHover }}
                  onClick={() => router.push("#about-me")}
                >
                  About me
                </MenuItem>
                <MenuItem
                  color={color}
                  _hover={{ background: bgHover }}
                  onClick={() => router.push("#tech-skills")}
                >
                  Tech Skills
                </MenuItem>
                <MenuItem
                  color={color}
                  _hover={{ background: bgHover }}
                  onClick={() => router.push("#projects")}
                >
                  Projects
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Show>
  );
}
