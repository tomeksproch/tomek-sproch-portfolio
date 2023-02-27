import { StyledForm, SendMeMessageWrapper } from "./SendMessageContent.styles";
import { TextField } from "@mui/material";
import Button from "../../atoms/Button/Button";
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";

const SendMessageContent = () => {
  return (
    <SendMeMessageWrapper>
      <StyledForm onSubmit={() => console.log("elo")}>
        <SectionsTittle>Send me a message!</SectionsTittle>
        <TextField
          variant="standard"
          label="Your name"
          placeholder="Enter your name"
          fullWidth
        />

        <TextField
          label="Your email"
          type="email"
          placeholder="Enter your email adress"
          variant="standard"
          fullWidth
        />

        <TextField
          id="outlined-multiline"
          label="Your message"
          fullWidth
          multiline
          rows={7}
          placeholder="Enter your message"
          variant="standard"
        />

        <Button type="submit" tittle="Send message!" />
      </StyledForm>
    </SendMeMessageWrapper>
  );
};

export default SendMessageContent;
