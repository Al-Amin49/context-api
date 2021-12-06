import React, { useContext, useState, useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import { CategoryContext } from '../../App';

const allProducts = [
    { name: 'Lenovo', category: 'Laptop' }, { name: 'Asus', category: 'Laptop' }, {name:'Mac', category:'Laptop'},
    {name:'Realme', category:'Mobile'},  {name:'Samsung', category:'Mobile'},  {name:'Nokia', category:'Mobile'},
    {name:'Nokia', category:'Camera'},  {name:'SamSung', category:'Camera'},  {name:'Nikon', category:'Camera'}
]
const Category = () => {
    const [category] = useContext(CategoryContext)
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        const matchedProducts= allProducts.filter(pd=>pd.category===category&&category.toLowerCase());
        setProducts(matchedProducts);

    },[category])
    return (
        <div>
            <h3>Select your category: {category}</h3>
          {
              products.map(pd=><CategoryDetail product={pd}></CategoryDetail>)
          }

        </div>
    )
}
export default Category;