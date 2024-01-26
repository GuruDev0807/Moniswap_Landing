import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogo from "../../assets/images/icons/logo01.png";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <StyledComponent>
      <SectionLogo>
        <ImgLogo>
          <img src={imgLogo} width={"100%"} height={"100%"} alt="imgLogo" />
        </ImgLogo>
        <TextLogo>MONISWAP</TextLogo>
      </SectionLogo>
      <ButtonOpen>
        <TextButton>Launch App</TextButton>
        <IconDrop>
          <FaAngleDown />
        </IconDrop>
      </ButtonOpen>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 30px;
  }
  @media (max-width: 1024px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 430px) {
    padding: 15px;
  }
`;

const SectionLogo = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ImgLogo = styled(Box)`
  display: flex;
  width: 42px;
  aspect-ratio: 1;
  margin-right: 6px;

  @media (max-width: 1440px) {
    width: 40px;
    margin-right: 5px;
  }
  @media (max-width: 1024px) {
    width: 38px;
  }

  @media (max-width: 768px) {
    width: 36px;
    margin-right: 4px;
  }
  @media (max-width: 430px) {
    width: 34px;
  }
`;

const TextLogo = styled(Box)`
  color: #000;
  font-family: Inter;
  font-size: 25.16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 23px;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 21px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const ButtonOpen = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 17px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #e7e2b6;
  color: #000;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    background-color: #f59855;
    color: white;
  }

  @media (max-width: 1440px) {
    padding: 14px 15px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    padding: 13px 14px;
  }
  @media (max-width: 430px) {
    padding: 12px 13px;
  }
`;

const TextButton = styled(Box)`
  display: flex;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

const IconDrop = styled(Box)`
  display: flex;
  font-size: 20px;
  margin-left: 30px;

  @media (max-width: 1440px) {
    font-size: 18px;
    margin-left: 25px;
  }
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 20px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    margin-left: 15px;
  }
`;

export default Header;
