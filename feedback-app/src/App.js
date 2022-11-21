import { useState } from 'react';
import Header from './components/Header';
import CriticList from './components/CriticList';
import CriticData from './data/criticData';
import Card from './components/common/Card';

function App() {
  const [critic, setCritic] = useState(CriticData);

  return (
    <>
      <Header text={'Criticizeable'} />
      <div className='container'>
        <CriticList critic={critic} />
      </div>
    </>
  );
}

export default App;
