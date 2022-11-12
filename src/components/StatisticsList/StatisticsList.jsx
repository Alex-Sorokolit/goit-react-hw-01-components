import PropTypes from "prop-types";
import Statistics from "../Statistics/Statistics";
import css from "./StatisticsList.module.css";
function StatisticsList(props) {
  const { items } = props;
  return (
    <div className={css.statistic}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.list}>
        {items.map((item) => (
          // Передаємо key - унікальні значення найчастіше id, щоб реакт міг розрізняти елементи
          <Statistics
            key={item.id}
            title={item.label}
            stats={item.percentage}
          />
        ))}
      </ul>
    </div>
  );
}
// Перевірка чи присутній обов'язковий атрибут id в масиві arrayOf об'єктів shape
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default StatisticsList;
