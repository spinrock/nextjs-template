/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

const dummyTitle = 'Dummy Title';

describe('Common Test', () => {
  beforeEach(() => {
    render(<Header title={dummyTitle} />);
  });

  it('Check Header Title', () => {
    const expectedHeaderTitle = dummyTitle;
    expect(screen.getByTestId('header-title').innerHTML).toEqual(expectedHeaderTitle);
  });

});

