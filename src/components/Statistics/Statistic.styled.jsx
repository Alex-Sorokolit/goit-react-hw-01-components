import styled from "@emotion/styled";

export const StatisticItem = styled.li`
  display: flex;
  width: 5em;
  height: 5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  background-color: ${(props) => {
    switch (props.doc) {
      case ".docx":
        return "#9bbac9";

      case ".pdf":
        return "#f08080";

      case ".mp3":
        return "#9ea998";
      case ".psd":
        return "#659ec7";
      default:
        return "#fff";
    }
  }};
`;

export const TypeDocument = styled.span`
  font-size: 1em;
`;

export const Upload = styled.span`
  font-size: 2em;
`;
