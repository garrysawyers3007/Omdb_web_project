import React from 'react';
import './Search.css';

export default function Search(props) {
  const value = props.value;
  const handleChange = (e) => props.onChange(e.target.value);
  const handleSubmit = () => props.onSubmit(value);
  const handleEnterPress = (e) => {
    if(e.key==='Enter'){
      props.onSubmit(value);
    }
  }

  return (
    <div className="background">
      <input className="search clear-margin-top" type="text" placeholder="Enter text to search" value={value} onChange={handleChange} onKeyDown={handleEnterPress}/>
      <button className="btn btn-success clear-margin-top" onClick={handleSubmit} >Search</button>
    </div>
  )
}