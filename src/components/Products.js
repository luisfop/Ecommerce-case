import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook Pro",
    imgURL:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
    price: 1500,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://www.notebookcheck.info/uploads/tx_nbc2/LenovoYoga9-14ITL5__1__01.JPG",
    price: 1200,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5420/media-gallery/la5420nt_cnb_00055lf110_gy_5000x5000_gettyimages-1254825733.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=660&qlt=100,0&resMode=sharp2&size=660,402",
    price: 1800,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://www.notebookcheck.info/uploads/tx_nbc2/portatil-hp-14-al002ns-i5-6200u-4gb-1336451_Perfil_ad_l_18.png",
    price: 1000,
  },  
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://a-static.mlcdn.com.br/1500x1500/notebook-acer-aspire-5-intel-core-i5-8gb-256gb-ssd-156-full-hd-windows-10-a515-54-53vn/magazineluiza/233911800/e31c180b6365a232132c226e1d0e28ac.jpg",
    price: 1250,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
