import React, { useState } from 'react';
import getQuote from '../services/simpsonApi';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState({
    name: '',
    image: '',
    quote: ''
  });
  
  const handleClick = async () => {
    const quote = await getQuote();
    setQuote(quote);
  };
  return (
    <div>
      <Load onClick={handleClick} />
      <Quote {...quote} />
    </div>
  )
}

export default SimpsonsQuote;