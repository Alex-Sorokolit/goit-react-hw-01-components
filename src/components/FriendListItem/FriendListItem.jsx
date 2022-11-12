import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  // console.log(css[isOnline]);
  return (
    <li className={`${css.item} ${css[isOnline]}`}>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
