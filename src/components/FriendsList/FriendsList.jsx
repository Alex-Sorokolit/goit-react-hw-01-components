import PropTypes from "prop-types";
import FriendsListItem from "../FriendListItem/FriendListItem";
import { FriendList } from "./FriendsList.styled";
function FriendsList(props) {
  const { friends } = props;
  return (
    <FriendList>
      {friends.map((friend) => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendsListItem>
      ))}
    </FriendList>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendsList;
