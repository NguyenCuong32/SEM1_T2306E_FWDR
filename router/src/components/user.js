import logo from './avatar.jpg'
import logo2 from './avatar2.jpg'
import logo3 from './avatar3.jpg'

import '../App.css'
function Users({name, pic})
{
    return (
        <div className='user-div'>
            <img className='profile-pic' src={pic} alt={`${name}'s avatar`}></img>
            <h2 className='user-name'>{name} &#127922;</h2>
        </div>
    )
}

function Avatar()
{
    const users = [
        {
          name:  "Phuc",
          pic: logo
        },
    
        {
          name: "Tan",
          pic: logo2
        },
    
        {
          name: "Tung",
          pic: logo3
        },
      ];

      return (
        <div>
            {users.map((user) => 
            (
                <Users name={user.name} pic={user.pic}/>
            ))}

        </div>
      )
}

export default Avatar;