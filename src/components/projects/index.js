import Apps from './apps'
import Comete from './comete'
import Classe from './classe'
import Ganesha from './ganesha'
import Ornikar from './ornikar'
import Typo from './typo'
import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY} from '../../utils/project'

const Projects = ({current, isMobile}) => {
  switch(current) {
    case APPS_KEY:
      return <Apps isMobile={isMobile} />
    case COMETE_KEY:
      return <Comete isMobile={isMobile} />
    case ORNIKAR_KEY:
      return <Ornikar isMobile={isMobile} />
    case CLASSE_KEY:
      return <Classe isMobile={isMobile} />
    case GANESHA_KEY:
      return <Ganesha isMobile={isMobile} />
    case TYPO_KEY:
      return <Typo isMobile={isMobile} />
  }
}

export default Projects
