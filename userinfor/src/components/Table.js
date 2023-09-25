import './Table.css';
function Form({name,Org,Price,Qty,Total}) {
    return (
        <tr>
        <td>{name}</td>
        <td>{Org}</td>
        <td>{Price}</td>
        <td>{Qty}</td>
        <td>{Total}</td>
        </tr>
    )
}
function Table () {
const Products = [
   {
    name: "Iphone 15",
    Org: "Vietnam",
    Price: 1500,
    Qty: 22,
    Total: 1500*22
   },
   {
    name: "Iphone 14",
    Org: "USA",
    Price: 1300,
    Qty: 52,
    Total: 1300*52
   },
   {
    name: "Galaxy S23",
    Org: "Korea",
    Price: 1400,
    Qty: 32,
    Total: 1400*32
   },
];
return (
    <div>
        <table className='myTable'>
        <tr>
        <th>Product</th>
        <th>Original</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total price</th>
        </tr>
        {
        Products.map((Prd) => (
       <Form name={Prd.name} Org={Prd.Org} Price={Prd.Price} Qty={Prd.Qty} Total={Prd.Total} />   
        ))
}
        </table>
    </div>
)
}
export default Table;