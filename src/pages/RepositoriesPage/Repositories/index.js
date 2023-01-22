import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

import { Container } from './styles';

const Repositories = ({ repositories, currentLanguage }) => {
  const repos = repositories
    .filter(
      (repository) =>
        currentLanguage === undefined || currentLanguage === repository.language
    )
    .map((repo) => <Repository key={repo.id} repository={repo} />);
  return <Container>{repos}</Container>;
};
Repositories.defaultProps = {
  currentLanguage: undefined,
};
Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};
export default Repositories;
