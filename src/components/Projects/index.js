import React from 'react'
import Icon1 from '../../images/pawpal.jpg'
import Icon2 from '../../images/comiccol.jpg'
import Icon3 from '../../images/yeezy.jpg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Projects = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>PawlPal</ServicesH2>
          <ServicesP>
            A web application that accesses the Petfinder API database so users can search their area for adoptable pets and share with others.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ComicCol</ServicesH2>
          <ServicesP>
            A web application that users access comics from an API database and are able to review and make a list of their favorites.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>G-Yeezy Game Search</ServicesH2>
          <ServicesP>
            A web application that uses multiple API's to search for games and get a detailed decriptiong of the game.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Projects
