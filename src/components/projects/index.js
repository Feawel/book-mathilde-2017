import Apps from './apps'
import Comete from './comete'
import Classe from './classe'
import Ganesha from './ganesha'
import Ornikar from './ornikar'
import Typo from './typo'
import OrnikarPrint from './ornikar-campaign'
import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY, ADVERTISING_KEY} from '../../utils/project'

const Projects = ({current, isMobile}) => {
  switch(current.key) {
    case APPS_KEY:
      return <Apps project={current} isMobile={isMobile} />
    case COMETE_KEY:
      return <Comete project={current} isMobile={isMobile} />
    case ORNIKAR_KEY:
      return <Ornikar project={current} isMobile={isMobile} />
    case CLASSE_KEY:
      return <Classe project={current} isMobile={isMobile} />
    case GANESHA_KEY:
      return <Ganesha project={current} isMobile={isMobile} />
    case TYPO_KEY:
      return <Typo project={current} isMobile={isMobile} />
    case ADVERTISING_KEY:
      return <OrnikarPrint project={current} isMobile={isMobile} />
  }
}

export default Projects
