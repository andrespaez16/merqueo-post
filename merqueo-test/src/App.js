import './App.css';
import Post from './components/post'
import Navbar from './components/layout/navbar'
import { Container } from './styles/styled'

function App() {
  return (
    <Container>
      <Navbar />
      <div className='sub-container'>
      <Post/>
      </div>
      
    </Container>
  );
}

export default App;
