import '../css/user.css';
import Like from '../components/like';
import Dislike from '../components/dislike';

function User({name, pic}) {
    return (
      <section className='flex-container'>
        <div className='flex-item'>
        <img className = 'user-pic' src = {pic} alt = {name} />
        </div>
        <h2 className='user-name'>
        🥰 HELLO, <span className='firstname'>{name}</span> 🥰 <Like /> <Dislike />
        </h2>
      </section>
    )
  }
  function App1() {
    const users = [
      {
        name: "TUNG",
        pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        name: "NAM",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/Screen_Shot_2020-02-01_at_15.26.12_2048x2048.png?v=1584862728",
      },
      {
        name: "DUNG",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3_2048x2048.jpg?v=1584862946",
      },
      {
        name: "THANG",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3-11_2048x2048.jpg?v=1584866378",
      },
      {
        name: "DUC",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-39-14_2048x2048.jpg?v=1584867696"
      }
    ];
    return (
        <div>
          {
            users.map((usr) => (
              <User name={usr.name} pic={usr.pic} />
            )
            )
          }
        </div>  
    );
  }
  
  export default App1;