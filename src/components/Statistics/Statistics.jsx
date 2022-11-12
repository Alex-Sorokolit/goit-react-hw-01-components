import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function Statistics(props) {
  const { title, stats } = props;
  // console.log(css);
  // console.log(title);
  // у властивості є крапка тому її замінюємо на пустоту
  // console.log(css[title.replace(".", "")]);
  return (
    <div className={`${css.wrap} ${css[title.replace(".", "")]}`}>
      <span className={css.label}>{title}</span>
      <span className={css.percentage}>{stats}%</span>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
