import './App.css';
import Coment from './components/coment'
import Navbar from './components/layout/navbar'
import styled from 'styled-components'

const Container = styled.div`
background:#f6f6f4;
height: 100 em;
width:100 em;
.sub-container{
  margin: 2% 20%;
  border: solid 1px #e0e0e0
}
`

function App() {
  return (
    <Container>
      <Navbar />
      <div className='sub-container'>
        <Coment />
      </div>
    </Container>
  );
}

export default App;
