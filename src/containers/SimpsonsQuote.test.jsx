import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=1', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote:"Me fail English? That's unpossible.",
          character:"Ralph Wiggum",
          image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        }
      ])
    )
  })
)

describe('quote tester', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches a quote and displays it', () => {
    render(<SimpsonsQuote />)
    const button = screen.getByRole('button');

    fireEvent.click(button);
    
    return waitFor(() => {
      // screen.getByAltText('Ralph Wiggum');
      screen.getByText("Me fail English? That's unpossible.")
    });
  });
});