import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import starData from './data/starsData';
import exoPlanetData from './data/exoPlanetsData';
import Star from './components/Star';
import ExoPlanet from './components/ExoPlanet';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  render () {
    return (
      <Scene fog="type: linear; color: #222; far: 100; near: 0">
        <Camera><Cursor/></Camera>
        <Sky/>
        {starData.map((star) => (<Star key={star.id} starData={star} />))}
        {exoPlanetData.map((exoPlanet) => (<ExoPlanet key={exoPlanet.id} exoPlanetData={exoPlanet} />))}
        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
