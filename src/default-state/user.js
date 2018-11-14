import moment from 'moment';

export default {
  firstName: 'Carlos',
  lastName: 'Gonzalez',
  nickName: 'Charly',
  birthPlace: 'Mexicali, Baja California, Mexico',
  currentLocation: 'Mexicali',
  currentTitle: 'Software Engineer',
  birthDate: moment('10/10/1992', 'DD/MM/YYYY').toDate(),
  hobbies: ['learn new programming languages', 'play video games']
};
