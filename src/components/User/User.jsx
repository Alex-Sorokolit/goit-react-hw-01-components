import PropTypes from "prop-types";
import { FaShoePrints, FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import css from "./User.module.css";
function User(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <div className={css.profile}>
      <div className="description">
        <div className={css.thumb}>
          {" "}
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </div>
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <FaShoePrints size={25} />
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statItem}>
          <FaEye size={25} />
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statItem}>
          <AiFillLike size={25} />
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default User;
