import PropTypes from "prop-types";
import { StatisticItem, TypeDocument, Upload } from "./Statistic.styled";

function Statistics(props) {
  const { title, stats } = props;
  // console.log(css);
  // console.log(title);
  // у властивості є крапка тому її замінюємо на пустоту
  // console.log(css[title.replace(".", "")]);
  // className={`${css.item} ${css[title.replace(".", "")]}`}
  return (
    <StatisticItem doc={title}>
      <TypeDocument>{title}</TypeDocument>
      <Upload>{stats}%</Upload>
    </StatisticItem>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
