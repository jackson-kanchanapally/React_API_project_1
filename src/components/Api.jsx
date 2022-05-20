import React, { Component } from "react";
import loading from "./loading.gif";
import {
  Image,
  Flex,
  Heading,
  Button,
  useColorMode,
  ChakraProvider,
  Box,
  Icon,
  Link,
  IconButton,
} from "@chakra-ui/react";
import {FaSun,FaMoon} from 'react-icons/fa'
import {GoMarkGithub} from 'react-icons/go'
export default class Api extends Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({ person: data.results[0], loading: false });
  }
  render() {
    return (
      <>
        <Flex height="8vh" alignItems="end" justifyContent="end" mx={10}>
      
          {/* <IconButton mr={5} isRound='true' icon={<GoMarkGithub/>} size='md'>
          </IconButton> */}
          <Link href="https://github.com/kanchanapallyjackson"  isExternal><IconButton mr={5} isRound='true' icon={<GoMarkGithub/>} size='md'>
          </IconButton> </Link>
          <IconButton size='md'
          icon={this.props.colorMode==='light'?<FaSun/>:<FaMoon/>}
            borderRadius="full"
            colorScheme="green"
            onClick={this.props.toggleColorMode}
          >
          </IconButton>
        </Flex>
        <Flex height="92vh " alignItems="center" justifyContent="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="15"
            color={this.props.formText}
            background={this.props.formBackground}
            p={12}
          >
            {this.state.loading || !this.state.person ? (
              <div>
                <img src={loading} />
              </div>
            ) : (
        
              <div>
                <Heading fontSize="5xl" mb={7} align="center">
                  Profile
                </Heading>
              <Box align='center' justifyContent='center'>
                <Image
                  align="center"
                  borderRadius="full"
                  boxSize="200px"
                  src={this.state.person.picture.large}
                ></Image>
                </Box>
                <Heading
                  my={5}
                  align="center"
                >{`${this.state.person.name.title} . ${this.state.person.name.first} ${this.state.person.name.last}`}</Heading>
                <h3>{`Email : ${this.state.person.email}`}</h3>
                <h3>{`Age : ${this.state.person.dob.age}`}</h3>
              </div>
            )}
          </Flex>
        </Flex>
      </>
    );
  }
}
