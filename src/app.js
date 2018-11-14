import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import store from './store';
import WelcomeContainer from './containers/welcome/welcome.container';
import MainMenuContainer from './containers/main-menu/main-menu.container';
import PersonalInformationContainer from './containers/personal-information/personal-information.container';
import SkillsContainer from './containers/skills/skills.container';
import JobHistoryContainer from './containers/job-history/job-history.container';
import EducationContainer from './containers/education/education.container';
import ProjectsContainer from './containers/projects/projects.container';
import ContactContainer from './containers/contact/contact.container';
import AboutContainer from './containers/about/about.container';
import theme from './material-theme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <Provider store={store}>
              <Switch>
                <Route path="/welcome-screen" component={WelcomeContainer} />
                <Route path="/main-menu" component={MainMenuContainer} />
                <Route path="/personal-information" component={PersonalInformationContainer} />
                <Route path="/skills" component={SkillsContainer} />
                <Route path="/job-history" component={JobHistoryContainer} />
                <Route path="/education" component={EducationContainer} />
                <Route path="/projects" component={ProjectsContainer} />
                <Route path="/contact" component={ContactContainer} />
                <Route path="/about" component={AboutContainer} />
                <Redirect from="/" to="/welcome-screen" />
              </Switch>
            </Provider>
          </BrowserRouter>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
