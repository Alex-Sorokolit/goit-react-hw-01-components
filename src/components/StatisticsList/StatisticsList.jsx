import PropTypes from "prop-types";
import Statistics from "../Statistics/Statistics";
import { Statistic, StatTitle, StatList } from "./StatisticList.styled";

function StatisticsList(props) {
  const { items } = props;
  return (
    <Statistic>
      <StatTitle>Upload stats</StatTitle>
      <StatList>
        {items.map((item) => (
          // Передаємо key - унікальні значення найчастіше id, щоб реакт міг розрізняти елементи
          <Statistics
            key={item.id}
            title={item.label}
            stats={item.percentage}
          />
        ))}
      </StatList>
    </Statistic>
  );
}
// Перевірка чи присутній обов'язковий атрибут id в масиві arrayOf об'єктів shape
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default StatisticsList;
