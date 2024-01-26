import { Box } from "@mui/material";
import styled from "styled-components";

const CartUtility = ({ data }: any) => {
  return (
    <StyledComponent>
      <SectionUp>
        <TextSubject>{data.textSubject}</TextSubject>
        <TextContent>{data.textDescription}</TextContent>
      </SectionUp>
      <SectionDown>
        <img src={data.imgSrc} alt="imgCart" />
      </SectionDown>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 300px;
  flex-direction: column;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0px 0px 20px #f59855);
  }

  @media (max-width: 1366px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 300px;
    margin: auto;
  }
`;

const SectionUp = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  border-radius: 10px 10px 0px 0px;
  background: #fdf7c4;

  padding: 35px 25px;
  box-sizing: border-box;

  @media (max-width: 1366px) {
    height: 280px;
  }
  @media (max-width: 900px) {
    height: 230px;
  }
`;

const SectionDown = styled(Box)`
  display: flex;
  width: 100%;
  height: 230px;
  border-radius: 0px 0px 10px 10px;
  background: #f59855;
  justify-content: center;
  align-items: center;

  > img {
    width: 250px;
  }

  @media (max-width: 1366px) {
    height: 230px;
    > img {
      width: 90%;
    }
  }
`;

const TextSubject = styled(Box)`
  color: #000;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TextContent = styled(Box)`
  color: #000;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 20px;

  @media (max-width: 1440px) {
    font-size: 13px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default CartUtility;
