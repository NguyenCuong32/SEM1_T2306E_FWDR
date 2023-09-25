import '../App.css';
import avatar from './git.png'
const Body = () => {
    return (
        <body>
            <div style={{ marginTop: '4pc' }} className="grid">
                <img src={avatar} className='avatar' alt="Avatar"></img>
                <div style={{ marginLeft: '3pc' }}>
                    <p>Fullname: Le Vinh Phuc</p>
                    <p>Role: Admin</p>
                    <p>Latest login: 10/10/2023 10:00</p>
                </div>
            </div>
        </body>
    );
}

export default Body;
