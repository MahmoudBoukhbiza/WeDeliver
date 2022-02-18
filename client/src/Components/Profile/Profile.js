import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../../JS/actions/food";
import Add from "./Add";
import ProfileCard from "./ProfileCard";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getFood());
  }, []);

  const foods = useSelector((state) => state.foodrReducer.foods);

  return (
    <div>
      <ProfileHeader />
      <Add />
      <div className="main-find-food">
        {foods ? (
          foods
            .filter((el) => el.postedBy == user?.name)
            .map((el) => <ProfileCard food={el} />)
        ) : (
          <h3>loading</h3>
        )}
      </div>

    </div>
  );
};

export default Profile;
