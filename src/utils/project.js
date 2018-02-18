import get from 'lodash/get'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import data from '../../data'

export const getProjectInitialStateByKey = (key, notransition) => ({
  currentProject: key,
  projectAppear: true,
  backgroundSize: 'medium',
  preventUpdateProject: true,
  preventInitialAnimation: true
})

export const getNextProjectKey = key => {
  const index = getIndexByProjectKey(key)
  const prevIndex = index === data.projects.length - 1 ? 0 : index + 1
  return get(data, ['projects', prevIndex, 'key'])
}


export const getPrevProjectKey = key => {
  const index = getIndexByProjectKey(key)
  const nextIndex = index === 0 ? data.projects.length - 1 : index - 1
  return get(data, ['projects', nextIndex, 'key'])
}

export const getProjectByKey = key =>
  find(data.projects, p => p.key === key)

export const getIndexByProjectKey = key =>
  findIndex(data.projects, p => p.key === key)

export const APPS_KEY = 'apps'
export const COMETE_KEY = 'comete'
export const CLASSE_KEY = 'classe'
export const ORNIKAR_KEY = 'ornikar'
export const GANESHA_KEY = 'ganesha'
export const TYPO_KEY = 'typo'
