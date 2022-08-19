import { Link } from 'react-router-dom';
import { container } from './style.css';

function App() {
  return (
    <div className={container}>
      <div>
        <h1>Home</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="badge">Badge</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
