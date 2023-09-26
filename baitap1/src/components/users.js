import '../components/users.css'
function user (props){
    const name=props.name;
    const pic=props.img;
    const job=props.job;
    var today=new Date();
    var date=today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear()+'     '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    return(
        <div className="user">
            <div className="img">
                <img className="img_user" src={pic}></img>
            </div>
            <div className="profile_user">
                <p>Full name: <span className='span_profile'>{name}</span></p>
                <p>Occupation: <span className='span_profile'>{job}</span></p>
                <p>Last login: <span className='span_profile'>{date}</span></p>
            </div>
        </div>
    )
}
export default user;