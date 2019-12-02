import React,{Component} from 'react';
import './searchbox.styles.css';

export const SearchBox = ({placeholder,handleEvent})=> (
    <input
        type='search'
        placeholder={placeholder}
        className='search'
        onChange={handleEvent} />
);