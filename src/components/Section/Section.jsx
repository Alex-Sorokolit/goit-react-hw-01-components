import PropTypes from "prop-types";
import { Children } from "react";
import { SectionName } from "./Section.styled";

function Section(props) {
  const { title, children } = props;
  return (
    <div>
      {/* Якщо title є, то рендедримо h2 */}
      {title && <SectionName>{title}</SectionName>}
      {children}
    </div>
  );
}

// Перевірка типів даних які ми передаємо компоненту
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
