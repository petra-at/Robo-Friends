import React ,{Component} from 'react'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

 class App extends Component{
     constructor(){
         super(); 
         this.state = {
            'robots':[],
            'searchField':''
         }
     }

     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}));
     }

     onSearchChange=(event)=> // use this syntax to avoid issue with state. 
     {
         this.setState({searchField :event.target.value});
     }

    render(){

        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length===0){
            return <h1>No Robo Friends</h1>
        }
        else{
        return(
            <div className="tc">
                <h1 class="sega">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
        }
    }
}
export default App;