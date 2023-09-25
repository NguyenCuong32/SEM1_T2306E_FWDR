import '../App.css';

const Header = () => {
    return (
        <header>
            <div style={{ fontWeight: 'bold' }}>ABC Company</div>
            <div style={{ fontWeight: 'italic', justifySelf: 'right' }}>Welcome Admin.</div>
            <div style={{ marginTop: '1pc' }}>
                <a className='headerNAVproduct' href='product.html' style={{ marginRight: '1pc' }}>Product</a>
                <a className='headerNAVproduct' href='userinformation.html'>User Information</a>
            </div>
        </header>
    );
}

export default Header;
