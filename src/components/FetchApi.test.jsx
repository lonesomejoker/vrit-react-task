import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FetchApi from './FetchApi';

// Mock global fetch
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('renders loading state initially', () => {
  render(<FetchApi />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('renders userlist component after data is fetched successfully', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ],
  });

  render(<FetchApi />);

  // waitFor handles act wrapping
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});

test('renders error message if API call fails', async () => {
  fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => { throw new Error('Failed to fetch list'); },
  });

  render(<FetchApi />);

  // waitFor automatically handles act wrapping
  await waitFor(() => {
    expect(screen.getByText('Error: Failed to fetch list')).toBeInTheDocument();
  });
});
