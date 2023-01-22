import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLangs, getUser, getRepos } from '../../services/api';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Loading, Container, SideBar, Main } from './styles';

const RepositoriesPage = () => {
  const { login } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangs(repositoriesResponse.data));
      setLoading(false);
    };
    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
