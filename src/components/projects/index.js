import Apps from './apps'
import Comete from './comete'
import Classe from './classe'
import Ganesha from './ganesha'
import Ornikar from './ornikar'
import Typo from './typo'

const Projects = ({current}) => {
  switch(current) {
    case 0:
      return <Apps />
    case 1:
      return <Comete />
    case 2:
      return <Ornikar />
    case 3:
      return <Classe />
    case 4:
      return <Ganesha />
    case 5:
      return <Typo />
  }
}

export default Projects
