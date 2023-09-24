import './App.css';


    function User(){
        const user=[
            {month:"9/2023",fullname:"Son", position:"Personnel",workday:26 , basic_salary: "$ 4000" ,actual_salary: "$ 4000"},
            {month:"9/2023",fullname:"Dung", position:"Tester",workday:25, basic_salary: "$ 3000" ,actual_salary: "$ 3846.1"},
            {month:"9/2023",fullname:"Dat", position:"Dev", workday:24, basic_salary: "$ 4000" ,actual_salary: "$ 3642"},
            
        ];
        const Product= [
            {product_import_date:12_9_2023,product_name:"Dress",product_code:"31202",input_price:20,total_quantity_of_goods:100,saleprice:50,inventory_quantity:20},
            {product_import_date:12_9_2023,product_name:"Shirt",product_code:"161003",input_price:15,total_quantity_of_goods:80,saleprice:30,inventory_quantity:10},
            {product_import_date:12_9_2023,product_name:"Skỉrt",product_code:"S31202",input_price:34,total_quantity_of_goods:76,saleprice:42,inventory_quantity:5},
            {product_import_date:12_9_2023,product_name:"Trousers",product_code:"HA161003",input_price:31,total_quantity_of_goods:60,saleprice:55,inventory_quantity:12},

        ];
    return(
        <div>
                {/* 1. Bang luong   */}
            <h1>Bang luong T9</h1>
            <table className='mytable'>
                <tr>
                    <th>Month</th>
                    <th>FullName</th>
                    <th>Position</th>
                    <th>Workday</th>
                    <th>Basic salary  </th>
                    <th>Actual salary</th>
                </tr>
                
                {user.map((usr,key) =>{
                    return (
                        <tr key={key}>
                            <td>{usr.month}</td>
                            <td>{usr.fullname}</td>
                            <td>{usr.position}</td>
                            <td>{usr.workday}</td>
                            <td>{usr.basic_salary}</td>
                            <td>{usr.actual_salary}</td>
                         
                        </tr>
                    )
                } )}
            </table>

             {/* 2. Bang ten san pham  */}
            <h1>Danh sach san pham</h1>
            <table className='mytable'>
                <tr>
                    <th>Product import date</th>
                    <th>Product's name</th>
                    <th>Product code</th>
                    <th>Input price</th>
                    <th>Total quantity of goods</th>
                    <th>Saleprice</th>
                    <th>Inventory quantity</th>
                </tr>
                {Product.map((prd,key) =>{
                    return (
                        <tr key={key}>
                            <td>{prd.product_import_date}</td>
                            <td>{prd.product_name}</td>
                            <td>{prd.product_code}</td>
                            <td>{prd.input_price}</td>
                            <td>{prd.total_quantity_of_goods}</td>
                            <td>{prd.saleprice}</td>
                            <td>{prd.inventory_quantity}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        
    );
}
export default User  ; 