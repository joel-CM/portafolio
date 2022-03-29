import style from "./Skills.module.css";
import { Heading, Box, Flex, styled } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiMongodb } from "react-icons/di";
import {
  SiChakraui,
  SiExpress,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export default function Skills() {
  return (
    <Box px={10} id={"tech-skills"}>
      <Heading
        py={"3rem"}
        textAlign={["center", "center", "end", "end"]}
        color={"#99cc99"}
      >
        Tech Skills
      </Heading>
      <Flex justify={"center"}>
        <Flex
          justify={"center"}
          alignItems={"center"}
          maxW={["100%", "100%", "50%", "50%"]}
          wrap={"wrap"}
        >
          <Link href={"https://developer.mozilla.org/es/docs/Web/HTML"}>
            <a target={"_blank"}>
              <AiFillHtml5 className={style.icon} />
            </a>
          </Link>
          <Link href={"https://developer.mozilla.org/es/docs/Web/CSS"}>
            <a target={"_blank"}>
              <DiCss3 className={style.icon} />
            </a>
          </Link>
          <Link href={"https://developer.mozilla.org/es/docs/Web/JavaScript"}>
            <a target={"_blank"}>
              <DiJavascript1 className={style.icon} />
            </a>
          </Link>
          <Link href={"https://es.reactjs.org"}>
            <a target={"_blank"}>
              <DiReact className={style.icon} />
            </a>
          </Link>
          <Link href={"https://chakra-ui.com/"}>
            <a target={"_blank"}>
              <SiChakraui className={style.icon} />
            </a>
          </Link>
          <Link href={"https://expressjs.com/es"}>
            <a target={"_blank"}>
              <SiExpress className={style.icon} />
            </a>
          </Link>
          <Link href={"https://nodejs.org/en/"}>
            <a target={"_blank"}>
              <FaNodeJs className={style.icon} />
            </a>
          </Link>
          <Link href={"https://www.postgresql.org/"}>
            <a target={"_blank"}>
              <SiPostgresql className={style.icon} />
            </a>
          </Link>
          <Link href={"https://sequelize.org/"}>
            <a target={"_blank"}>
              <SiSequelize className={style.icon} />
            </a>
          </Link>
          <Link href={"https://www.mongodb.com/es"}>
            <a target={"_blank"}>
              <DiMongodb className={style.icon} />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
