import ProfileDescription from "./profileDescription/profileDescription";
import MyPosts from "./myPosts/myPosts";
import MainImage from "./mainImage/mainImage";

const Profile = () => {
    return (
        <div className='mainContant'>
            <MainImage />
            <ProfileDescription />
            <MyPosts />
        </div>
    )
}

export default Profile;