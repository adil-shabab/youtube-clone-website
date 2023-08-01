import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import Vedio from './pages/vedio/Vedio';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
