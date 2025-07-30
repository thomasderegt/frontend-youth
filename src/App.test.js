import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { StrategyProvider } from './context/StrategyContext';
import { SettingsProvider } from './context/SettingsContext';
import App from './App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock window.location.reload
Object.defineProperty(window, 'location', {
  value: { reload: jest.fn() },
  writable: true,
});

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    window.location.reload.mockClear();
  });

  const renderApp = () => {
    return render(
      <ThemeProvider>
        <LanguageProvider>
          <StrategyProvider>
            <SettingsProvider>
              <Router>
                <App />
              </Router>
            </SettingsProvider>
          </StrategyProvider>
        </LanguageProvider>
      </ThemeProvider>
    );
  };

  test('shows onboarding modal when userGoal is not set', () => {
    localStorageMock.getItem.mockReturnValue(null);
    renderApp();
    
    // The onboarding modal should be visible
    expect(screen.getByText('Peace be upon you! Glad you are here.')).toBeInTheDocument();
  });

  test('does not show onboarding modal when userGoal is set', () => {
    localStorageMock.getItem.mockReturnValue('doubts');
    renderApp();
    
    // The onboarding modal should not be visible
    expect(screen.queryByText('Peace be upon you! Glad you are here.')).not.toBeInTheDocument();
  });
});
