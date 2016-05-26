import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={`primitive: sphere; radius: 0.01`} material={{color: '#E66'}}
                  position={`${props.exoPlanetData.x}, ${props.exoPlanetData.y}, ${props.exoPlanetData.z}`}
                  >
  </Entity>
);
