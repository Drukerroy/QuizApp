import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfigFile from '../../Helpers/ParticlesConfigFile';

const ParticlesBackground = () => {
    return ( 
        <div>
            <Particles params={particlesConfigFile}></Particles>
        </div>
     );
}
 
export default ParticlesBackground;