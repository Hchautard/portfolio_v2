import Home from '../app/pages/home';
import UnderConstruction from '@/app/pages/under-construction';

export default function App() {
  const isUnderConstruction = false;

  return isUnderConstruction ? <UnderConstruction /> : <Home />;
}
