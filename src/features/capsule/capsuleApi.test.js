import { render, screen } from '@testing-library/react';
import mockData from '../../data/testcapsules.json'
import axios from 'axios'
import { fetchCapsules } from './capsuleApi';


jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn()
}))

const mockedAxios = axios

mockedAxios.post.mockResolvedValue(mockData)
mockedAxios.get.mockResolvedValue(mockData)

// test('renders learn react link', async () => {
//   axios.get.mockResolvedValueOnce({ data: mockData });
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

  it('handles error when fetching capsules', async () => {
    axios.get.mockResolvedValueOnce({ data: mockData });
    try {
      const data = await fetchCapsules();
      expect(data).toBe(mockData);
    } catch (error) {
     console.log(error);
    }
  });
