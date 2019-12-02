import React,{Component} from 'react';
import './card.styles.css';

class Card extends Component{
    render(){
        return(
            <div className='card-container'>
                <img alt="mon" src={`https://robohash.org/${this.props.mon.id + 10}?set=set2&size=180x180`}/>
                <h2>{this.props.mon.name}</h2>
                <p>{this.props.mon.email}</p>

            </div>
        );
    }
}
export default Card;