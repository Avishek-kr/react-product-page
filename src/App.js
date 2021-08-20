import classes from './App.module.css'
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';

function App() {
 
  return (
    <div className="App">
      <header className={classes.topNavbar}>
        <img src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png?resize=561%2C160&ssl=1" alt="Amazon logo" />
      </header>

      <div className={classes.MainContainer}> 
         <ProductPreview />
       <div className={classes.productData}>
         <h1 className={classes.productTitle}>{ProductData.title}</h1>
         <p className={classes.productDescription}>{ProductData.description}</p>

         <h3 className={classes.sectionHeading}>Select Color</h3>
         <div>
           <img className={[classes.productImage, classes.selectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color Watch" />
           <img className={classes.productImage} src="https://imgur.com/PTgQlim.png" alt="Red Color Watch" />
           <img className={classes.productImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color Watch" />
           <img className={classes.productImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Color Watch" />
         </div>

         <h3 className={classes.sectionHeading}>Features</h3>
         <div>
            <button className={[classes.featureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.featureItem}>Heart Rate</button>
         </div>
         <button className={classes.primaryButton}>Buy Now</button>
       </div>
      </div>
    </div>
  );
}

export default App;
