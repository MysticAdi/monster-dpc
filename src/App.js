import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/SearchBox/searchbox.component';
//import { throwStatement } from '@babel/types';

class App extends Component {


  constructor(){
    super();

    this.state={
      array:[],
      searchField:''
    };

  }

  handleEvent = e => {
    this.setState({searchField:e.target.value})
  } ;

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({array: users}));
  }

  render(){
    const {array,searchField} = this.state;
    const filteredArray = array.filter(
      mon=>mon.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="App">
      <h1> Monster Rolodex </h1>
     <SearchBox placeholder='search monster' handleEvent={this.handleEvent}/>
     <CardList name={filteredArray}/>
    </div>  
  );
}
}

export default App;
