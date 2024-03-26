import UseUniquId from '../hooks/useld'
import HomePage from '../pages/Home'
import Properties from '../pages/Properties'


export const navbar = [
  { id: UseUniquId, element: < HomePage />, title: 'Home', path: '/home', private: false, hidden: false },
  { id: UseUniquId, element: <Properties />, title: 'Properties', path: '/properties', private: false, hidden: false }
];