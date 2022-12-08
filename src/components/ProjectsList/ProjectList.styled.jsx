import styled from '@emotion/styled';

export const TitleProjects = styled.h2`
  width: 80%;

  padding: 5px;
  padding-left: 55px;
  background-color: #fcfefb;
  color: #2d2d2d;
`;

export const ProjectsContainer = styled.ol`
  padding: 68px 0px;
  padding-bottom: 0;
  color: #d7d7d7;
`;

export const ProjectsItem = styled.li`
  width: 80.5%;
  margin-bottom: 10px;
  margin-left: 55px;

  list-style: none;
`;

export const ProjectLink = styled.a`
  color: #fec601;
  font-size: 22px;
  font-weight: 700;
  padding: 3px 0;
`;

export const ProjectGit = styled.a`
  padding-bottom: 0px;

  color: #fec601;
`;

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fec601;
    height: 3px;
    width: 100%;
  }
`;

export const ProjectsDescript = styled.p`
  margin-top: 7px;
  font-size: 14px;
`;

export const ProjectsTech = styled.p`
  margin-top: 5px;

  font-size: 12px;
  text-decoration: underline;
`;
