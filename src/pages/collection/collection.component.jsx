import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection}) => {
 
   
  // const  { title, items } =  collection;
  
  

  return (
    
    <div className='collection-page'>
      {
        collection?<div>
         
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
        </div>
        :<h1>Loading</h1>
      }
      
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);