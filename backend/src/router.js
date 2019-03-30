import compose from 'koa-compose'
import Articles from './contexts/articles'
import Datasets from './contexts/datasets'
import Papers from './contexts/papers'
import Projects from './contexts/projects'
import Videos from './contexts/videos'
import Feed from './feed'

const Router = () => { 
  return compose([
    Articles.routes(), 
    Datasets.routes(),
    Papers.routes(),
    Projects.routes(),
    Videos.routes(),
    Feed.routes()
  ])
}

export default Router