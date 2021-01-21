import './App.css';
import Post from './components/post'
import Navbar from './components/layout/navbar'
import styled from 'styled-components'

const Container = styled.div`
background:#f6f6f4;
height: 100 em;
width:100 em;
.sub-container{
  margin: 2% 20%;
}
`

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
