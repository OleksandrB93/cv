import SideBar from './SideBar/SideBar';
import Summary from './Summary/Summary';
import ProjectList from './ProjectsList/ProjectList';
import Education from './Education/Education';
import Works from './Works/Works';
import { AppContainer } from './App.styled';
import { SideBarContainver } from './SideBar/SideBar.styled';

export const App = () => {
  return (
    <AppContainer>
      <SideBarContainver>
        <SideBar />
      </SideBarContainver>
      <div>
        <Summary />
        <ProjectList />
        <Education />
        <Works />
      </div>
    </AppContainer>
  );
};
