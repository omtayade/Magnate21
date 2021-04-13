import { createSelector } from "reselect"



const selectShop = state =>state.shop;

export const selectCollections = createSelector(
    [selectShop] , shop => shop.collections 
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
//Object.keys(collections) this will store our keys of collections object into an array  like ["hats" , "sneakers"....] and on mapping on this array we are fetching content of this keys.   
);

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections] ,collections => collections[collectionUrlParam]
);