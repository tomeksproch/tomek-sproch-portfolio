import React from "react";
import { SendMeMessageWrapper, SendMessageTexts, TittleLink,LinkDescription, SeeYouText, BubleClipart, FourDotClipartOne,DotClipart } from "./SendMessageContent.styles";
import bubleClipartSvg from '../../../assets/images/adds/ts-svg-9.svg'
import dotClipartSvg from '../../../assets/images/adds/ts-svg-2.svg'
import dotsFourClipartSvg from '../../../assets/images/adds/ts-svg-10.svg'
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";

const SendMessageContent = () => {
  return (
    <SendMeMessageWrapper>
            <DotClipart src={dotClipartSvg} />
      <SendMessageTexts>
        <SectionsTittle>Send me a message!</SectionsTittle>

<TittleLink>
        <a href="mailto:tomek.sproch@gmail.com">📧 Email:</a>
</TittleLink>
        <LinkDescription>
          For swift and detailed communication, drop me an email at <a href="mailto:tomek.sproch@gmail.com">tomek.sproch@gmail.com</a>. I'm always ready to discuss exciting opportunities and answer any questions you might have.
        </LinkDescription>
        <TittleLink>
        <a
          href="https://wa.me/48888696986"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 WhatsApp:
        </a>
        </TittleLink>
        <LinkDescription>
          For a quick chat and seamless communication, reach out on{" "}
          <a
            href="https://wa.me/48888696986"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp.{" "}
          </a>
          Let's connect and explore how we can work together to create something extraordinary.
        </LinkDescription>
        <TittleLink>
        <a
          href="https://www.instagram.com/tomeksproch/"
          target="_blank"
          rel="noopener noreferrer"
          >
          📱 Instagram:
        </a>
          </TittleLink>
        <LinkDescription>
          Catch a glimpse of my work and shoot me a message on Instagram{" "}
          <a
            href="https://www.instagram.com/tomeksproch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tomeksproch.
          </a>{" "}
          Direct messages are open for collaboration and inquiries.
        </LinkDescription>

        <SeeYouText>Looking forward to hearing from you! 🖐🏻</SeeYouText>
      </SendMessageTexts>
      <BubleClipart src={bubleClipartSvg} />
      <FourDotClipartOne src={dotsFourClipartSvg} />
    </SendMeMessageWrapper>
  );
};

export default SendMessageContent;
