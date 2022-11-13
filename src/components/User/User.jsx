import PropTypes from "prop-types";
import { FaShoePrints, FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import {
  Profile,
  StatItem,
  Tag,
  Thumb,
  UserName,
  Stats,
  Location,
  Label,
  Quantity,
} from "./User.styled";
import css from "./User.module.css";
function User(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <Profile>
      <div className="description">
        <Thumb>
          {" "}
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </Thumb>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatItem>
          <FaShoePrints size={25} />
          <Label>Followers: </Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <FaEye size={25} />
          <label>Views: </label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <AiFillLike size={25} />
          <label>Likes: </label>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </Stats>
    </Profile>
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
