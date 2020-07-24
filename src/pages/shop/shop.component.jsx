import React from "react";
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../component/collection-overview/collection-overview.component'
import collectionPage from '../../pages/collection/collection.component'
const ShopPage = ({match}) => {
  console.log(match);
  return(
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route  path={`${match.path}/:collectionId`} component={collectionPage} />
  </div>
);}



export default ShopPage;
