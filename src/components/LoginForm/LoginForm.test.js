import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import { validateEmail, validatePassword } from './validation';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test('validates email correctly', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);
});

test('validates password correctly', () => {
  expect(validatePassword('Password1!')).toBe(true);
  expect(validatePassword('pass')).toBe(false);
  expect(validatePassword('password')).toBe(false);
  expect(validatePassword('PASSWORD1')).toBe(false);
  expect(validatePassword('Password')).toBe(false);
});