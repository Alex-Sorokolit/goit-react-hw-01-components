import PropTypes from "prop-types";
import User from "../User/User";
function UserList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        // Передаємо key - унікальні значення найчастіше id, щоб реакт міг розрізняти елементи
        <li key={item.username}>
          <User
            username={item.username}
            avatar={item.avatar}
            tag={item.tag}
            location={item.location}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

// Перевірка типів даних які ми передаємо компоненту
// arrayOf масив чого об'єктів shape
UserList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // Пропи User перевіряються у User.jxs
      // перевіряємо чи є id у itema (в даному випадку роль унікального значення username)
      username: PropTypes.string.isRequired,
    })
  ),
};

export default UserList;
