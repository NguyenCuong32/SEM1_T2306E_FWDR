import '../companants/user.css'
function user(props){
    const name = props.name ;
    const pic= props.img ;
    const role = props.role
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    return (
        <div className="user">
            <div className="img">
                <img  className="img_user" src={pic} ></img>
            </div>
        
            <div className="profile_user">
                <h3>Fullame: <span className='span_profile'>{name}</span> </h3>
                <h3>Role: <span className='span_profile'>{role}</span></h3>
                <h3>Latest login: <span className='span_profile' >{date}</span> </h3>
             </div>
        </div>


    )
}
export default user;