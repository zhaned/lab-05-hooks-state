const getQuote = async () => {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
  const json = await response.json();

  return { 
    name: json[0].character,
    quote: json[0].quote,
    image: json[0].image
  };
};

export default getQuote;
