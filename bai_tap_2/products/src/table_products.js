import './products.css'

function Products() {
    const list=[
        {id:1, name:"Nồi cơm",quantity:1000, brand:"Sun House", import_price:500, price:700},
        {id:2, name:"Chảo size 30",quantity:999, brand:"Sun House", import_price:300, price:500},
        {id:3, name:"Nồi chiên",quantity:800, brand:"Bosch", import_price:1500, price:2000},
        {id:4, name:"Máy xay",quantity:1000, brand:"Sun House", import_price:400, price:700},
        {id:5, name:"Bộ xoong",quantity:500, brand:"Fissler", import_price:1000, price:1400},
        {id:6, name:"Máy ép chậm",quantity:800, brand:"Sun House", import_price:500, price:700},
        {id:7, name:"Nồi Hầm",quantity:900, brand:"Sun House", import_price:1500, price:2000},
        {id:8, name:"Chảo size 28",quantity:1000, brand:"Fissler", import_price:1600, price:2100},
        {id:9, name:"Chảo size 24",quantity:1000, brand:"Fissler", import_price:1500, price:2000},

    ];
    return (
        <div>
        <h1>Danh sách sản phẩm</h1>
        <table>
            <tr>
                <th className='Id Item'>Id</th>
                <th className='Name Item'>Name</th>
                <th className='Quantity Item'>Quantity</th>
                <th className='Brand Item'>Brand</th>
                <th className='Import_price Item'>Import Price</th>
                <th className='Price Item'>Price</th>
            </tr>
            {list.map((list,key)=>{
                return(
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.quantity}</td>
                        <td>{list.brand}</td>
                        <td>{list.import_price}</td>
                        <td>{list.price}</td>
                    </tr>
                )
            })}
        </table>
        </div>
    )
};
export default Products;