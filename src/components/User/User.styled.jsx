import styled from "@emotion/styled";

export const Profile = styled.li`
  padding: 10%;
  background-color: rgb(255, 255, 255);
  border-radius: 3%;
  background: linear-gradient(180deg, #2c3036 0%, #0e1114 100%);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25),
    -3px -3px 4px rgba(255, 255, 255, 0.188);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.492);
`;

export const Thumb = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background: linear-gradient(141.5deg, #2f3235 15.55%, #1f2326 82.24%);
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25),
    -4px -4px 7px rgba(255, 255, 255, 0.116);
  position: relative;
  overflow: hidden;
  border: 5px solid #34383b;
  border-color: linear-gradient(141.5deg, #34383b 15.55%, #1f2326 82.24%);
`;

export const Avatar = styled.img`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`;

export const UserName = styled.p`
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.745);
  text-shadow: 2px 2px 5px #000000;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 1.5em;
  margin-top: 0;
`;

export const Stats = styled.ul`
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  text-align: center;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.3em;
`;

export const Label = styled.span`
  margin-left: 10px;
`;

export const Quantity = styled.span`
  margin-left: 10px;
`;
