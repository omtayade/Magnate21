import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import PreviewCollection from '../Preview-Collection/preview-collection.component'
import './collections-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) =>(
    <div className='collections-overview'>
        {collections.map(({id , ...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);
const mapStateToProp = createStructuredSelector({
    collections:selectCollectionsForPreview
});
export default connect(mapStateToProp) (CollectionOverview);