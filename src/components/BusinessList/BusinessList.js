import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React {
    render() {
        return (
            <div className="BusinessList">
  <Business /> 
  <Business /> 
  <Business /> 
  <Business /> 
  <Business /> 
  <Business /> 
</div>
        )
    }
}

export default BusinessList;