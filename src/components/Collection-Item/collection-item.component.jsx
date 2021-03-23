import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import  {AddItems} from '../../redux/cart/cart.actions'

const CollectionItem = ({item , AddItems}) => {
     const { name , price ,imageUrl}=item;
    return(
    <div className="collection-item">
        <div className="image"
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>
        <CustomButton onClick={()=> AddItems(item)} inverted>Add to cart</CustomButton>
    </div>
    )
};
const mapDispatchToProps =dispatch =>({
    AddItems: item =>dispatch(AddItems(item))
});
export default connect(null ,mapDispatchToProps) (CollectionItem)