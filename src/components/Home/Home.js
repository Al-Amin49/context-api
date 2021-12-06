import React,{useContext}from 'react';
import Category from '../Category/Category'
import {CategoryContext} from '../../App'

const Home=()=>{
    const category = useContext(CategoryContext);

    
 const homeStyle={border:'1px solid purple', margin:'20px', textAlign:'center'};
    return (
        <div style={homeStyle}>
            <h3>This is home: {category}</h3>
            <Category ></Category>

        </div>
    )
}
export default Home;