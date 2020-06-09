import React from "react";
import "../assets/css/App.scss";
import profilePhoto from "../assets/img/profile.jpg";

class App extends React.Component {
  state = { title: "Configurando React con Webpack", nombre: "Brayan Llanos" };

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <div class="info">
          <img src={profilePhoto} width="200" />
          <h1>{this.state.nombre}</h1>
          <p>JavaScript Developer</p>
          <p>Barranquilla / Colombia</p>
        </div>
      </>
    );
  }
}

export default App;
