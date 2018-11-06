import { Component } from 'inferno'
import Categories from '../components/Categories/Categories'

class Home extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home