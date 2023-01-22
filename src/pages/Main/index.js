import { React, useState } from 'react';
import { MdSearch } from 'react-icons/md';

import gitHubLogo from '../../assets/images/github-logo.svg';
import { Container, Logo, Title, Form, Input, Button } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');
  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="digite aqui seu usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={32} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
