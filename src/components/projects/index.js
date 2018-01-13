import Apps from './apps'
import Comete from './comete'
import Classe from './classe'
import Ganesha from './ganesha'
import Ornikar from './ornikar'
import Typo from './typo'
import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY} from '../../utils/project'

const Projects = ({current}) => {
  switch(current) {
    case APPS_KEY:
      return <Apps />
    case COMETE_KEY:
      return <Comete />
    case ORNIKAR_KEY:
      return <Ornikar />
    case CLASSE_KEY:
      return <Classe />
    case GANESHA_KEY:
      return <Ganesha />
    case TYPO_KEY:
      return <Typo />
  }
}

export default Projects
