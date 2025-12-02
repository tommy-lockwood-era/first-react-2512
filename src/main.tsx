import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MyPascalCaseComponent from './MyPascalCaseComponent.tsx';
import Card from './Card.tsx';

// const myCamelCaseVariable = 42;
// const my_snake_case_variable = 42;
// const MY_SCREAMING_SNAKE_CASE_VARIABLE = 42;
// const MyPascalCaseVariable = 42;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Card />
        <MyPascalCaseComponent />
        <App />
    </StrictMode>
);
