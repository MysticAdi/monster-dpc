import React,{Component} from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component{
render(){
    return(
        <div className='cardlist'>
            {this.props.name.map(mon=><Card mon={mon} key={mon.id}/>)}
        </div>
    );
}
}

export default CardList;