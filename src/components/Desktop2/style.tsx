import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";


const DesktopContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 100px;
  display: flex;
  gap: 78px;
  background:
    linear-gradient(180deg, rgba(25, 10, 3, 0.69) 0%, #000 3.85%), #000;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;
  }

  @media (max-width: 640px) {
    padding: 20px 15px;
    gap: 30px;
  }
`;

const LeftSection = styled.div`
  width: 100%;
  max-width: 755px;
  height: auto;
  position: relative;
  flex-shrink: 0;
  background-color: #090909;

  @media (max-width: 991px) {
    width: 100%;
    min-height: 600px;
  }

  @media (max-width: 640px) {
    min-height: 500px;
  }
`;

const LeftContent = styled.div`
  left: 50px;
  width: 500px;
  position: absolute;
  top: 25px;

  @media (max-width: 991px) {
    width: calc(100% - 80px);
    height: auto;
    position: relative;
    left: 40px;
    top: 25px;
  }
`;

const SectionTitle = styled.div`
  width: 229px;
  height: 31px;
  color: #a5a5a5;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2.4px;
  position: absolute;
  left: 15px;
  top: 0px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const SafeIcon = styled(LazyLoadImage)`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 36px;
  top: 109px;

  @media (max-width: 991px) {
    width: 350px;
    height: 350px;
    position: relative;
    left: 0;
    top: 20px;
  }

  @media (max-width: 640px) {
    width: 250px;
    height: 250px;
  }
`;

const GradientText = styled.div`
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 400;
  background: linear-gradient(
    95deg,
    #fff 1.7%,
    rgba(255, 255, 255, 0.44) 100.26%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LeftSectionText = styled(GradientText)`
  width: 100%;
  max-width: 661px;
  font-size: 3.5vw;
  line-height: 1.2;
  position: absolute;
  left: 30px;
  top: 513px;

  @media (max-width: 991px) {
    font-size: 6vw;
    position: relative;
    left: 0;
    top: 40px;
    margin-top: 40px;
  }

  @media (max-width: 640px) {
    font-size: 7vw;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  flex: 1;
  max-width: 922px;

  @media (max-width: 991px) {
    width: 100%;
    gap: 30px;
  }
`;

const Card = styled.div`
  width: 822px;
  position: relative;
  background-color: #090909;

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    min-height: 350px;
  }
`;

const TopCard = styled(Card)`
  height: 461px;
`;

const BottomCard = styled(Card)`
  height: 424px;
`;

const CardContent = styled.div`
  width: 922px;
  position: relative;

  @media (max-width: 640px) {
    width: 355px;
  }
`;

const TopCardContent = styled(CardContent)`
  height: 461px;
`;

const BottomCardContent = styled(CardContent)`
  height: 424px;
`;

const CardTitle = styled.div`
  width: 256px;
  height: 21px;
  color: #a5a5a5;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  position: absolute;
  left: 37px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const TopCardTitle = styled(CardTitle)`
  top: 59px;
`;

const BottomCardTitle = styled(CardTitle)`
  top: 54px;
`;

const TopCardText = styled(GradientText)`
  width: 512px;
  height: 214px;
  font-size: 66px;
  position: absolute;
  left: 37px;
  top: 128px;

  @media (max-width: 991px) {
    font-size: 48px;
    width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const BottomCardText = styled(GradientText)`
  width: 513px;
  height: 197px;
  font-size: 66px;
  position: absolute;
  left: 37px;
  top: 118px;

  @media (max-width: 991px) {
    font-size: 48px;
    width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const CardSubtitle = styled.div`
  width: 398px;
  height: 21px;
  color: #a5a5a5;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  position: absolute;
  left: 49px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const TopCardSubtitle = styled(CardSubtitle)`
  top: 390px;

  @media (max-width: 640px) {
    left: 18px;
    top: 395px;
  }
`;

const BottomCardSubtitle = styled(CardSubtitle)`
  top: 358px;
`;

const CoinIcon = styled(LazyLoadImage)`
  width: 265px;
  height: 294px;
  position: absolute;
  left: 530px;
  top: 113px;

  @media (max-width: 991px) {
    width: 200px;
    height: 220px;
    right: 20px;
    left: auto;
  }

  @media (max-width: 640px) {
    width: 150px;
    height: 165px;
    right: 10px;
    left: 90px;
    top: 215px;
  }
`;

const CardImage = styled(LazyLoadImage)`
  width: 493px;
  height: 367px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 375px;
  top: -9px;

  @media (max-width: 991px) {
    width: 350px;
    height: 260px;
    right: 20px;
    left: auto;
  }

  @media (max-width: 640px) {
    width: 250px;
    height: 185px;
    right: 10px;
    left: 86px;
    top: 130px;
  }
`;

const BlurCircleLeft = styled.div`
  width: 312px;
  height: 313px;
  border-radius: 312.552px;
  position: absolute;
  left: -15px;
  top: -40px;
`;

const BlurCircleTop = styled.div`
  width: 259px;
  height: 222px;
  border-radius: 259.247px;
  position: absolute;
  left: 450px;
  top: 49px;
`;

const BlurCircleBottom = styled.div`
  width: 259px;
  height: 204px;
  border-radius: 259.247px;
  position: absolute;
  left: 372px;
  top: 37px;
`;

export {
  DesktopContainer,
  LeftSection,
  LeftContent,
  SectionTitle,
  SafeIcon,
  GradientText,
  LeftSectionText,
  RightSection,
  TopCard,
  BottomCard,
  TopCardContent,
  BottomCardContent,
  TopCardTitle,
  BottomCardTitle,
  TopCardText,
  BottomCardText,
  TopCardSubtitle,
  BottomCardSubtitle,
  CoinIcon,
  CardImage,
  BlurCircleLeft,
  BlurCircleTop,
  BlurCircleBottom
};