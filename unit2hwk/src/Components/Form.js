import React, {useState} from 'react';
import products from '../products';

export default function Form(props) {
    const [userProduct, userSubmit] = useState({name: "", price: "", description:""});
    
    const submitBtn = () => {
        props.submitBtn(userProduct);
        // userSubmit({name: "", price: "", description:""});
    }

    const updateChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        userSubmit({
            ...userProduct,
            [name]:value
        })
    }

    return (
        <div>
            <input type="text" name="name" placeholder="name" value={userProduct.name} onChange={updateChange}/>
            <input type="text" name="price" placeholder="price" value={userProduct.price} onChange={updateChange}/>
            <input type="text" name="description" placeholder="description" value={userProduct.description} onChange={updateChange}/>
            <input type="submit" onClick={()=>submitBtn()}/>
        </div>
    );
}