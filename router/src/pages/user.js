import Avatar from "../components/user";
import LikeCounter from "../components/like"
import DislikeCounter from "../components/dislike"
const User = () =>
{
    return (
    <div>
        <Avatar></Avatar>
        <div className="buttons">
        <LikeCounter></LikeCounter>
        <DislikeCounter></DislikeCounter>
        </div>
    </div>
    )
}

export default User;