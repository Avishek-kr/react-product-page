import React, {Component} from 'react';

import classes from './App.module.css'
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import TopBar from './TopBar/TopBar';

class App extends Component{
  state ={
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

onColorOptionClick = (pos)=>{
      this.setState({currentPreviewImagePos : pos})
  }
onfeatureItemClick=(pos)=>{
  this.setState({currentSelectedFeature: pos});
}
 render(){
   return (
     <div className="App">
      <TopBar />
       <div className={classes.MainContainer}>
       <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}  />
          </div> 
          <div className={classes.productData}>
           <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onfeatureItemClick={this.onfeatureItemClick} currentSelectedFeature={this.currentSelectedFeature} />
       </div>
       </div>
     </div>
   );
 }
}

export default App;
