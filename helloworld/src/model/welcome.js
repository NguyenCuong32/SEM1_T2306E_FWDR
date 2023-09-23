import '../App.css'
function Welcome(props) 
{
    return (
        <div>
            <h1>Welcome, {props.name} - <span className='color'>Address: {props.address}</span> - <span className='color1'>age: {props.age}</span></h1>
        </div>
    );
}

export default Welcome;