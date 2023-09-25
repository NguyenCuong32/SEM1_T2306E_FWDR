import './user.css';
function User() {
    return (
        <div>
        <Product />
        <Footer></Footer>
        </div>
    )
}

function Product() {
    const props = [
        {
            name: 'Blackpink',
            pic: 'https://cdnmedia.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/29062023-blackpink-3.jpg',
            role: 'User',
            login: '22-09-2023  12:00'
        }
    ];

    return (
        <div className="product-container">
            <img src={props[0].pic} alt='pic-1' className='pic' />
            <div className='product-container2'>
                <p>Fullname: {props[0].name}</p>
                <p>Role: {props[0].role}</p>
                <p>Lastest Login: {props[0].login}</p>
            </div>
        </div>
    )
};
function Footer(){
    return(
        <div className='footer1'>
            <p className='footer3'> số 8 , tôn thất thuyết , mỹ đình , hà nội  </p>
            <div className='footer2'>
            <p className='p-1'>Facebook</p>
            <p className='p-2'>Zalo </p>
            </div>
        </div>
    )
};

export default User;