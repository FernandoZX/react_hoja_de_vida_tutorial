import React, { Component } from 'react';
import Header from './Componentes/HeaderComponent';
import Section from './Componentes/SectionComponent';
import ListComponent from './Componentes/ListComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header txt="Hoja de vida de Fernando"/>
        <Section description={
          [<p>
          <h2>Descripcion</h2>
          <br/> Programador en back-end y front end
          </p>]
        }/>
        <div>
          <h2>Skills</h2>
          <br />
          <ListComponent lists={['Rails','Ruby','React','Heroku','Postgresql']} />
        </div>
      </div>
    );
  }
}

export default App;
