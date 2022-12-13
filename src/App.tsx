import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Essay from './Components/EssayComponent';
import Feedback from './Components/FeedbackComponent';
import { Container } from '@mui/material';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Container className='container'>
        <Feedback />
        <Essay />
      </Container>
    </div>
  )
}

export default App;
