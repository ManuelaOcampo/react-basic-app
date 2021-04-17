import React from 'react';
import './product-table.style.css';
import ProductCategory from '../product-category-row/product-category';
import ProductCategory2 from '../product-category-row/product-category2';
import ProductRow from '../product-row/product-row';
import ProductRow2 from '../product-row/product-row2';
import ProductRow3 from '../product-row/product-row3';
import ProductRow4 from '../product-row/product-row4';
import ProductRow5 from '../product-row/product-row5';
import ProductRow6 from '../product-row/product-row6';
const ProductTable=()=> {
    return(
        <div className="product-table-container">
            
         <div className="text">
         <table>
          <tr>
            <th>Name</th>
            <td className="space">
            <th>Price</th>
             </td>
          </tr>
          
        </table>
        </div>
        <ProductCategory/>
        <ProductRow/>
        <ProductRow2/>
        <ProductRow3/>
        <ProductCategory2/>
        <ProductRow4/>
        <ProductRow5/>
        <ProductRow6/>

        </div>
    );
}

export default ProductTable;