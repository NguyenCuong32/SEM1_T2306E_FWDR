import './table.css'
import React from 'react';
function table(){
    
    const Product=[
        {code:"TH0001",price:1000,quantity:100,Amount:100,note:"full"},
        {code:"TH0002",price:999,quantity:98,Amount:100,note:""},
        {code:"TH0003",price:888,quantity:80,Amount:100,note:""}
    ];
    return(
        <React.Fragment>
        <table>
            <tr>
                <th colSpan={1} rowSpan={2} >Product Code</th>
                <th colSpan={3}>Product Information</th>
                <th rowSpan={2}>Notes</th>
            </tr>
            <tr>
                <th>Price</th>
                <th>quantity</th>
                <th>Amount</th>
            </tr>
                {Product.map((Product,key)=>{
                    return(
                        <tr key={key}>
                        <td>{Product.code}</td>
                        <td>{Product.price}</td>
                        <td>{Product.quantity}</td>
                        <td>{Product.Amount}</td>
                        <td>{Product.note}</td>
                        </tr>
                    )
                })}
        </table>
        <button className="sort bt">Sort</button>
        <button className="add bt">Add new</button>
        </React.Fragment>
    )
};
export default table;