import './styles/global.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById("app");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
