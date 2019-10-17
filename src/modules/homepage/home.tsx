import React from "react";
import '../../shared/styles/home.scss';
import ButtonAppBar from "../../shared/components/navBar/navBar";
import { Container } from "@material-ui/core";
export default class HomePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <Container>
          <ButtonAppBar />
          <div className="main-body">
            Hello
          </div>
        </Container>
      </div>
    )
  }
}