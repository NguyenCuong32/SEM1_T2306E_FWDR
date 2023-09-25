import '../App.css';

const Footer = () => {
    return (
        <footer>
            <div className='squarelist2'>
                <div style={{ fontWeight: 'bold', justifySelf: 'left' }}>Address: số 8 Tôn Thất Thuyết</div>
                <div style={{ justifySelf: 'right' }} className='fbzlcontainer'>
                    <div style={{ fontWeight: 'bold' }} className='fbcontainer'>Facebook</div>
                    <div style={{ fontWeight: 'bold' }} className='zlcontainer'>Zalo</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
