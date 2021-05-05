import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton
        selected
        mentions={3}
      />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={42} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentions={2} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={8} />
      <ServerButton />
    </Container>
  )
};

export default ServerList;
