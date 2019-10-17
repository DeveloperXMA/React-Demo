import React from "react";
import '../../shared/styles/home.scss';
import ButtonAppBar from "../../shared/components/navBar/navBar";
import { Container, Box } from "@material-ui/core";
import MyForm from '../FormCarousel';


export default class HomePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <Container>
          <ButtonAppBar />
          <Box className="main-body">
            <MyForm />
          </Box>
        </Container>
      </div>
    )
  }
}