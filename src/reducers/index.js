import userReducer from './user.reducer';
import menuReducer from './menu.reducer';
import contactReducer from './contact.reducer';
import projectsReducer from './projects.reducer';
import jobHistoryReducer from './job-history.reducer';
import skillsReducer from './skills.reducer';
import educationReducer from './education.reducer';

export default function mainReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    menu: menuReducer(state.menu, action),
    contact: contactReducer(state.contact, action),
    projects: projectsReducer(state.projects, action),
    jobHistory: jobHistoryReducer(state.jobHistory, action),
    skills: skillsReducer(state.skills, action),
    education: educationReducer(state.education, action)
  };
}
