import styled from "@emotion/styled";

export const History = styled.table`
  background-color: #fff;
  font-size: 1.5em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border-collapse: collapse;
  color: #202020;
  margin-bottom: 100px;
`;

export const Head = styled.th`
  background-color: #121619;
  padding: 10px;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.919);
`;

export const Cell = styled.td`
  padding: 10px;
`;

export const Row = styled.tr`
  :hover {
    filter: saturate(5) drop-shadow(0 0 0.75rem rgb(78, 78, 78));
  }
  background-color: ${(props) => {
    switch (props.typeRow) {
      case "invoice":
        return "#dde3d6";
      case "payment":
        return "#d6dbe5";
      case "withdrawal":
        return "#e5d8d7";
      case "deposit":
        return "#e6e1da";
      default:
        return "#fff";
    }
  }};
`;
