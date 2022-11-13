import styled from "@emotion/styled";

export const Friend = styled.li`
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  background: linear-gradient(180deg, #2c3036 0%, #0e1114 100%);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25),
    -3px -3px 4px rgba(255, 255, 255, 0.188);
  border-radius: 10px;
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid transparent;

  :not(:last-child) {
    margin-bottom: 15px;
  }

  border-left-width: 5px;

  border-color: ${(props) => {
    switch (props.status) {
      case true:
        return "rgb(131, 194, 37)";
      case false:
        return " rgb(149, 4, 4)";
      default:
        return "#fff";
    }
  }};

  box-shadow: ${(props) => {
    switch (props.status) {
      case true:
        return " rgba(131, 194, 37, 0.5) -8px 0px 5px -5px";
      case false:
        return " rgba(149, 4, 4, 0.5) -8px 0px 5px -5px";
      default:
        return "rgba(255, 255, 255, 0.5) -8px 0px 5px -5px";
    }
  }};
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  /* outline: 1px solid purple; */
  color: aliceblue;
  margin-right: 20px;
  border-radius: 5%;

  background: linear-gradient(141.5deg, #2f3235 15.55%, #1f2326 82.24%);
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25),
    -4px -4px 7px rgba(255, 255, 255, 0.116);
`;

export const FriendName = styled.p`
  margin: 0;
  color: #c1c2c2;
  font-size: 2em;
`;

export const Indicator = styled.span``;
