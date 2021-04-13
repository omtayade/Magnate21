import React from 'react';
import './menu-item.scss';
import {withRouter, Link} from 'react-router-dom';


const MenuItem = ({title, imageUrl,size ,history , linkUrl , match}) =>(
  
   <div className={`${size} menu-item`} >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
       <Link to={`${match.url}${linkUrl}`}>
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
        </Link>
    </div>
 
 
);
export default withRouter(MenuItem);  
           
           