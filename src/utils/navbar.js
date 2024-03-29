import UseUniquId from '../hooks/useld'
import HomePage from '../pages/Home'
import Properties from '../pages/Properties'


export const navbar = [
  { id: UseUniquId, element: < HomePage />, title: 'Home', path: '/home', private: false, hidden: false },
  { id: UseUniquId, element: <Properties />, title: 'Properties', path: '/properties', private: false, hidden: false },
  { id: UseUniquId, element: <h1>Generic Sign in</h1>, title: 'Sign In', path: '/signin', private: false, hidden: true },
  { id: UseUniquId, element: <h1>Generic Sign up</h1>, title: 'Sign Up', path: '/signup', private: false, hidden: true },
];