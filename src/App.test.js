import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import App from './App';



test("App component fetches data and renders it", () => {
    const { getBytext, queryAllbyTestId } = render(<App />);
});