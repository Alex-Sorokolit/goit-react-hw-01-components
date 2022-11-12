import PropTypes from "prop-types";
import { Children } from "react";

function Section(props) {
  const { title, children } = props;
  return (
    <div className="section">
      {/* Якщо title є, то рендедримо h2 */}
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </div>
  );
}

// Перевірка типів даних які ми передаємо компоненту
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
