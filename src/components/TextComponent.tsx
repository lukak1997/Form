import styled from "styled-components";

function TextComponent() {
  return (
    <TextDiv>
      <TextUp>Learn to code by watching others</TextUp>
      <TextDown>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </TextDown>
    </TextDiv>
  );
}

export default TextComponent;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-bottom:64px;
  margin-top:88px;
  @media (min-width: 1440px) {
    margin-top:200px;
    margin-right:80px;
  }
`;

const TextUp = styled.h1`
  color: ${(props) => props.theme.colors.White};
  font-size: 28px;
  font-weight: 700;
  font-family: "Poppins";
  width:327px;
  text-align:center;
  letter-spacing:-0.29px;
  line-height:36px;
  @media (min-width: 1440px) {
    width: 525px;
    font-size: 50px;
    line-height:55px;
    letter-spacing:-0.52px;
    text-align:left;
  }
`;
const TextDown = styled.h1`
  color: ${(props) => props.theme.colors.White};
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins";
  width:327px;
  text-align:center;
  margin-top:45px;
  line-height:26px;
  @media (min-width: 1440px) {
    width: 525px;
    text-align:left;
  }
`;
