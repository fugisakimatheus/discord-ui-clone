import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Matheus Fugisaki"
          date="03/05/2021"
          content="Hj eu vou estrignar o Will Raptor"
        />
        <ChannelMessage
          author="Matheus Fugisaki"
          date="03/05/2021"
          content="Hj eu vou estrignar o Will Raptor"
        />
        <ChannelMessage
          author="Matheus Fugisaki"
          date="03/05/2021"
          content="Hj eu vou estrignar o Will Raptor"
        />
        <ChannelMessage
          author="Matheus Fugisaki"
          date="03/05/2021"
          content="Hj eu vou estrignar o Will Raptor"
        />
        <ChannelMessage
          author="Matheus Fugisaki"
          date="03/05/2021"
          content="Hj eu vou estrignar o Will Raptor"
        />
        <ChannelMessage
          author="Will Raptor"
          date="03/05/2021"
          content="Bora de x1"
        />
        <ChannelMessage
          author="Will Raptor"
          date="03/05/2021"
          content="kkkkkk"
        />
        <ChannelMessage
          author="Samu Weller"
          date="03/05/2021"
          content="kkkkkk"
        />
        <ChannelMessage
          author="Kaiba Corp"
          date="03/05/2021"
          isBot
          hasMention
          content={
            <>
              <Mention>@Matheus Fugisaki</Mention>, vc só perde meu, já ta 19x1 kkkkkk.
            </>
          }
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="kkkkkk"
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="Amanhã eu que vou estreguinar o Will Raptor"
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="Amanhã eu que vou estreguinar o Will Raptor"
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          hasMention
          content={
            <>
              Eu só perco pro <Mention>@Matheus Fugisaki</Mention>
            </>
          }
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="Amanhã eu que vou estreguinar o Will Raptor"
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="Amanhã eu que vou estreguinar o Will Raptor"
        />
        <ChannelMessage
          author="Yuri Moto"
          date="03/05/2021"
          content="Amanhã eu que vou estreguinar o Will Raptor"
        />
      </Messages>

      <InputWrapper>
        <Input
          type="text"
          placeholder="Conversar em #hora-do-duelo"
        />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
