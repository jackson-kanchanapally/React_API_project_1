import React from "react";
import {useNavigate } from "react-router-dom";
import {
  Image,
  Flex,
  Heading,
  Button,
  useColorMode,
  ChakraProvider,
  Box,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Api from "./components/Api";
export default function ApiFun() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const formText = useColorModeValue("rgba(0, 0, 0, 0.80)", "gray.300");

  return (
    <>
      {/* <Api toggleColorMode={useColorMode().toggleColorMode} formBackground={formBackground} formText={formText}  */}
      <Api
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
        formBackground={formBackground}
        formText={formText}
      />
    </>
  );
}
