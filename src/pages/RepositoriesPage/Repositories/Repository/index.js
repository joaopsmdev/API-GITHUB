import PropTypes from 'prop-types';
import React from 'react';
import { Container, Name, Footer, Description, Link, Lang } from './styles';
import { langColors } from '../../../../services/config';

const Repository = ({ repository }) => {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url}>Ver</Link>
      </Footer>
    </Container>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
