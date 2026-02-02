export const featuredProjects = [
  {
    title: 'User Management App',
    description:
      'An admin panel for a SaaS product to manage users, roles, and subscriptions. It uses JWT for token access and auth. Public and private routes with React Router.',
    repository: 'https://github.com/jeancmr/user-management-front',
    liveUrl: 'https://user-management-front-six.vercel.app/',
    image: '/projects/management.webp',
    techStack: ['React', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'TypeORM', 'Docker'],
  },
  {
    title: 'Mini E-commerce',
    description:
      'A web app that allows users to add and remove products to the cart. It supports user authentication and saves the cart in a database so that users can retrieve it later.',
    repository: 'https://github.com/jeancmr/mini-ecommerce',
    liveUrl: 'https://mini-ecommerce-lac.vercel.app/',
    image: '/projects/minicommerce.webp',
    techStack: ['React', 'Typescript', 'Tailwind CSS', 'Firebase', 'Redux Toolkit'],
  },

  {
    title: 'Validator and random number generator',
    description:
      'Application for generating pseudo-random numbers by using five different methods. It also allows you to validate whether a set of previously generated pseudo-random numbers complies with randomness.',
    repository: 'https://github.com/jeancmr/validador-y-generador-numeros-pseudoaleatorios',
    liveUrl: 'https://validador-y-generador-numeros-pseudoaleatorios.vercel.app/',
    image: '/projects/generator.webp',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Todolist App',
    description:
      'Todolistapp where users can create several todo lists and each one has its own items. TodoLists are saved in local storage',
    repository: 'https://github.com/jeancmr/todolist-react-app',
    liveUrl: 'https://todo-list-react-front.vercel.app/',
    image: '/projects/todo.webp',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },

  {
    title: 'Driver license app',
    description:
      'Web application that allows users to schedule classes based on whether they are available or not. It also allows them to view their scheduled classes and cancel them if necessary.',
    repository: 'https://github.com/jeancmr/mi-licencia-app-frontend',
    liveUrl: 'https://mi-licencia-app-frontend.onrender.com/',
    image: '/projects/license.webp',
    techStack: ['React', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Sequelize'],
  },
];
