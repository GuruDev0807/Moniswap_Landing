import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogo from "../../assets/images/icons/logo01.png";
import { dataContactList, dataPageLinkList } from "../../data/dataContact";

const Footer = () => {
  return (
    <StyledComponent>
      <SectionTop>
        <SectionLogo>
          <ImgLogo>
            <img src={imgLogo} width={"100%"} height={"100%"} alt="imgLogo" />
          </ImgLogo>
          <TextLogo>MONISWAP</TextLogo>
        </SectionLogo>
        <SectionContactGroup>
          {dataContactList.map((each, index) => {
            return (
              <ButtonContact
                key={index}
                onClick={() => {
                  window.open(each.link);
                }}
              >
                {each.icon}
              </ButtonContact>
            );
          })}
        </SectionContactGroup>
      </SectionTop>
      <SectionPageLinkGroup>
        {dataPageLinkList.map((each, index) => {
          return (
            <SectionEachGroupLink>
              <TextLinkHeadName key={index}>{each.name}</TextLinkHeadName>
              <SectionPageLinks>
                {each.links.map((each01, index01) => {
                  return (
                    <TextLinkPage key={index01}>{each01.name}</TextLinkPage>
                  );
                })}
              </SectionPageLinks>
            </SectionEachGroupLink>
          );
        })}
      </SectionPageLinkGroup>
      <SectionFooterName>Built by Moniswap Team with 💡</SectionFooterName>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 50px 50px 0px 0px;
  background: #0e0e0f;
`;

const SectionTop = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 45x;
  }
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 35px;
  }
  @media (max-width: 700px) {
    padding: 40px;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 430px) {
    padding: 37px;
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
  width: 55px;
  aspect-ratio: 1;
  margin-right: 8px;

  @media (max-width: 1440px) {
    width: 50px;
    margin-right: 7px;
  }
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 45px;
    margin-right: 6px;
  }
  @media (max-width: 430px) {
    width: 40px;
    margin-right: 5px;
  }
`;

const TextLogo = styled(Box)`
  color: #fff;

  font-family: Inter;
  font-size: 32.932px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 430px) {
    font-size: 24px;
  }
`;

const SectionContactGroup = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12px;

  @media (max-width: 1440px) {
    grid-column-gap: 11px;
  }
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    grid-column-gap: 10px;
  }
  @media (max-width: 700px) {
    margin-top: 50px;
  }
  @media (max-width: 430px) {
    margin-top: 30px;
    grid-column-gap: 9px;
  }
`;

const ButtonContact = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #000;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  font-size: 25px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
  /* &:active {
    transform: scale(0.9);
  } */

  @media (max-width: 1440px) {
    border-radius: 18px;
    padding: 18px;
    font-size: 25px;
  }
  @media (max-width: 1024px) {
    border-radius: 17px;
    padding: 17px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 16px;
    font-size: 22px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    padding: 15px;
    font-size: 20px;
  }
`;

const SectionPageLinkGroup = styled(Box)`
  display: grid;
  border-top: 1px solid #434343;
  border-bottom: 1px solid #434343;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: auto;

  padding: 50px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 45x;
  }
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 35px;
  }
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 40px;
    padding: 40px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    padding: 40px;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    padding: 37px;
  }
`;

const SectionEachGroupLink = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextLinkHeadName = styled(Box)`
  color: #717172;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const SectionPageLinks = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextLinkPage = styled(Box)`
  color: #fff;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 20px;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: #f59855;
  }

  @media (max-width: 1440px) {
    font-size: 13px;
    margin-top: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 15px;
  }
  @media (max-width: 430px) {
    font-size: 11px;
    margin-top: 12px;
  }
`;

const SectionFooterName = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #717172;

  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 50px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 45x;
  }
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 35px;
  }

  @media (max-width: 430px) {
    padding: 30px;
  }
`;

export default Footer;
