import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={`primitive: sphere; radius: ${props.starData.absmag / 15}`} material={{color: '#FFF'}}
                  position={`${props.starData.x}, ${props.starData.y}, ${props.starData.z}`}
                  >
  </Entity>
);
