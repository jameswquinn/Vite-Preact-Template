import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import PlaceholderComponent from './PlaceholderComponent';

describe('PlaceholderComponent', () => {
  it('renders Hello World', () => {
    const { getByText } = render(<PlaceholderComponent />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('increments count when button is clicked', () => {
    const { getByText } = render(<PlaceholderComponent />);
    const button = getByText('Increment');
    
    expect(getByText('Click Count: 0')).toBeTruthy();
    fireEvent.click(button);
    expect(getByText('Click Count: 1')).toBeTruthy();
  });
});
