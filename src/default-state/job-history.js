import moment from 'moment';

export default [
  {
    current: false,
    company: 'Bufete de Tecnología y Soluciones Avanzadas',
    website: 'https://www.bts.com.mx/',
    title: 'Lead Developer',
    subtitle: null,
    startDate: moment('05/01/2014', 'DD/MM/YYYY').toDate(),
    endDate: moment('01/08/2017', 'DD/MM/YYYY').toDate()
  },
  {
    current: false,
    company: 'Sonata Services',
    website: 'https://sonataservices.com/',
    title: 'Javascript Developer',
    subtitle: null,
    startDate: moment('01/08/2017', 'DD/MM/YYYY').toDate(),
    endDate: null
  },
  {
    current: true,
    company: 'Parallel 6/PRA Health Sciences',
    website: 'https://prahs.com/',
    title: 'Software Engineer',
    subtitle: 'Frontend Developer',
    startDate: moment('01/08/2017', 'DD/MM/YYYY').toDate(),
    endDate: null
  }
];
