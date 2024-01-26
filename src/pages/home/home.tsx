import { Box } from "@mui/material";
import styled from "styled-components";
import imgHowItWorks from "../../assets/images/backgrounds/howitworks.png";
import imgMoniSwap from "../../assets/images/backgrounds/moniswap.png";
import { dataCartUtilities } from "../../data/dataCart";
import CartUtility from "../../components/Cart/CartUtility";

const Home = () => {
  return (
    <StyledComponent>
      <TextProjectHead>
        The central hub for trading & liquidity marketplace on 🐻 Berachain
      </TextProjectHead>
      <SectionProjectDescription>
        <TextProjectDescription>
          Moniswap represents the next evolution of automated market makers
          (AMM) and functions as the central liquidity hub for 🐻 Berachain. It
          integrates a robust liquidity incentive engine, a governance model
          based on vote-lock mechanisms, and a user-friendly experience.
          Leveraging the latest features from Velodrome V2.
        </TextProjectDescription>
      </SectionProjectDescription>
      <SectionProjectDescription>
        <TextSubject01>HOW IT WORKS</TextSubject01>
        <TextContent01>
          Crafted to incentivize contributors fostering the sustainable
          expansion of the protocol.
        </TextContent01>
      </SectionProjectDescription>
      <SectionImgHowItWorks>
        <img
          src={imgHowItWorks}
          width={"100%"}
          height={"100%"}
          alt="imgHowItWorks"
        />
      </SectionImgHowItWorks>
      <SectionCartGroup>
        {dataCartUtilities.map((each, index) => {
          return <CartUtility key={index} data={each} />;
        })}
      </SectionCartGroup>
      <SectionProjectDescription>
        <TextSubject01>MONISWAP LAUNCHPAD</TextSubject01>
        <TextContent01>
          The Moniswap launchpad serves as a user-friendly platform,
          facilitating the seamless launch and equitable distribution of
          governance tokens with efficiency and ease.
        </TextContent01>
      </SectionProjectDescription>
      <SectionImgMoniswap>
        <img
          src={imgMoniSwap}
          width={"100%"}
          height={"100%"}
          alt="imgMoniSwap"
        />
      </SectionImgMoniswap>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const TextProjectHead = styled(Box)`
  width: 35%;
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 150px;

  @media (max-width: 1600px) {
    width: 45%;
    font-size: 48px;
    margin-top: 150px;
  }
  @media (max-width: 1440px) {
    width: 55%;
    font-size: 45px;
    margin-top: 130px;
  }
  @media (max-width: 1024px) {
    width: 70%;
    font-size: 40px;
    margin-top: 120px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 35px;
    margin-top: 110px;
  }

  @media (max-width: 430px) {
    width: 90%;
    font-size: 30px;
    margin-top: 100px;
  }
`;

const SectionProjectDescription = styled(Box)`
  display: flex;
  margin-top: 180px;
  width: 35%;
  flex-direction: column;

  @media (max-width: 1600px) {
    width: 40%;
  }
  @media (max-width: 1440px) {
    margin-top: 160px;
    width: 50%;
  }
  @media (max-width: 1024px) {
    margin-top: 140px;
    width: 60%;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    width: 70%;
  }

  @media (max-width: 430px) {
    margin-top: 100px;
    width: 80%;
  }
`;

const TextProjectDescription = styled(Box)`
  color: #47473f;

  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const TextSubject01 = styled(Box)`
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 30px;
  @media (max-width: 1440px) {
    font-size: 27px;
  }
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 23px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const TextContent01 = styled(Box)`
  color: #47473f;

  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 30px;
  @media (max-width: 1440px) {
    margin-top: 20px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 10px;
  }
`;

const SectionImgHowItWorks = styled(Box)`
  display: flex;
  width: 50%;
  margin-top: 50px;

  @media (max-width: 1440px) {
    width: 60%;
    margin-top: 45px;
  }
  @media (max-width: 1024px) {
    width: 65%;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin-top: 35px;
  }
  @media (max-width: 430px) {
    width: 80%;
    margin-top: 30px;
  }
`;

const SectionImgMoniswap = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 90px;
  box-sizing: border-box;

  margin-top: 100px;
  margin-bottom: 200px;
  @media (max-width: 1440px) {
    margin-top: 70px;
    margin-bottom: 160px;
    padding: 0px 70px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 140px;
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 120px;
    padding: 0px 30px;
  }
  @media (max-width: 430px) {
    margin-top: 50px;
    margin-bottom: 100px;
    padding: 0px 20px;
  }
`;

const SectionCartGroup = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 90px;
  box-sizing: border-box;
  justify-content: space-between;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-column-gap: 50px; */
  margin-top: 200px;

  @media (max-width: 1440px) {
    padding: 0px 50px;
  }

  @media (max-width: 1366px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
  }
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    padding: 30px;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
  }
  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    padding: 0px;
  }
`;

export default Home;
