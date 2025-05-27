"use client";
import React from "react";
import {
  DesktopContainer,
  LeftSection,
  LeftContent,
  SectionTitle,
  BlurCircleLeft,
  SafeIcon,
  LeftSectionText,
  RightSection,
  TopCard,
  TopCardContent,
  TopCardTitle,
  TopCardText,
  TopCardSubtitle,
  BlurCircleTop,
  CoinIcon,
  BottomCard,
  BottomCardContent,
  BottomCardTitle,
  BottomCardText,
  BottomCardSubtitle,
  BlurCircleBottom,
  CardImage
} from "./style";

const Desktop2 = () => {
  return (
    <DesktopContainer>
      <LeftSection>
        <LeftContent>
          <SectionTitle>CONTA SEGURA</SectionTitle>
          <BlurCircleLeft
            dangerouslySetInnerHTML={{
              __html: `<svg id="26808:34193" width="526" height="525" viewBox="0 0 526 525" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-circle-left"> <g filter="url(#filter0_f_26808_34193)">   <ellipse cx="263" cy="262.557" rx="156" ry="156.276" fill="#DFA918" fill-opacity="0.56"></ellipse> </g> <defs>   <filter id="filter0_f_26808_34193" x="0.904282" y="0.185654" width="524.191" height="524.744" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>     <feGaussianBlur stdDeviation="53.0479" result="effect1_foregroundBlur_26808_34193"></feGaussianBlur>   </filter> </defs> </svg>`,
            }}
          />
          <SafeIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be57555c21c452d88f80b9140035e94f44a4db49?placeholderIfAbsent=true"
            alt="locker-dynamic-premium"
          />
          <LeftSectionText>
            Uma conta segura para aporte de todo seu patrimônio
          </LeftSectionText>
        </LeftContent>
      </LeftSection>

      <RightSection>
        <TopCard>
          <TopCardContent>
            <TopCardTitle>APP SIMPLIFICADO</TopCardTitle>
            <TopCardText>
              Crédito PJ, <br />
              POS e Câmbio.
            </TopCardText>
            <TopCardSubtitle>COM UMA INTERFACE INTUITIVA</TopCardSubtitle>
            <BlurCircleTop
              dangerouslySetInnerHTML={{
                __html: `<svg id="26808:34200" width="429" height="392" viewBox="0 0 429 392" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-circle-top"> <g filter="url(#filter0_f_26808_34200)"> <ellipse cx="214.144" cy="195.983" rx="129.624" ry="110.783" fill="#DFA918" fill-opacity="0.5"></ellipse> </g> <defs> <filter id="filter0_f_26808_34200" x="0.188019" y="0.867096" width="427.912" height="390.231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="42.1662" result="effect1_foregroundBlur_26808_34200"></feGaussianBlur> </filter> </defs> </svg>`,
              }}
            />
          </TopCardContent>
          <CoinIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3ae449ea47721ea96601c631316accc064490a?placeholderIfAbsent=true"
            alt="Group 427319514"
          />
        </TopCard>

        <BottomCard>
          <BottomCardContent>
            <BottomCardTitle>CARTÃO</BottomCardTitle>
            <BottomCardText>
              <p>Cartão de&nbsp;Crédito&nbsp;</p>
              <p>Visa</p>
            </BottomCardText>
            <BottomCardSubtitle>FACILIDADE EM SUAS MÃOS</BottomCardSubtitle>
            <BlurCircleBottom
              dangerouslySetInnerHTML={{
                __html: `<svg id="26898:439" width="429" height="374" viewBox="0 0 429 374" fill="none" xmlns="http://www.w3.org/2000/svg" class="blur-circle-bottom"> <g filter="url(#filter0_f_26898_439)"> <ellipse cx="214.144" cy="187.116" rx="129.624" ry="101.891" fill="#DFA918" fill-opacity="0.5"></ellipse> </g> <defs> <filter id="filter0_f_26898_439" x="0.188019" y="0.892242" width="427.912" height="372.448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="42.1662" result="effect1_foregroundBlur_26898_439"></feGaussianBlur> </filter> </defs> </svg>`,
              }}
            />
          </BottomCardContent>
          <CardImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/655bbba3ed7de6af84d8870470d6c25c0eebac48?placeholderIfAbsent=true"
            alt="CARTAO_BDM-removebg-preview 1"
          />
        </BottomCard>
      </RightSection>
    </DesktopContainer>
  );
};

export default Desktop2;
