import PropTypes from "prop-types";
import FriendsListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
function FriendsList(props) {
  const { friends } = props;
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendsListItem>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendsList;
