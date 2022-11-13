import PropTypes from "prop-types";
import { Friend, Avatar, FriendName } from "./FriendListItem.styled";

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  // console.log(css[isOnline]);
  return (
    <Friend status={isOnline}>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}
// className={css.status}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
