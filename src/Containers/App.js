import React, {Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import '../Containers/App.css';
import Scroll from '../Components/Scroll';

/* This state can make or break the app. In order to use this, we must 
extend the Component class, add a constructor to the class, and call 
a super right after the constructor has been built. */
class App extends Component { // This is considered as a mounting component
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length?
        <h1>Loading</h1> :
        (
        <div className= 'tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <Scroll>
                <CardList robots={ filteredRobots } />
            </Scroll>
        </div>
   );  
  }
 } 


export default App;