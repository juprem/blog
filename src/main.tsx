import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router';
import './index.css';
import 'dayjs/locale/fr';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import dayjs from 'dayjs';

dayjs.locale('fr');

const memoryHistory = createMemoryHistory({
    initialEntries: ['/'], // Pass your initial url
});
// Create a new router instance
const router = createRouter({
    routeTree,
    basepath: '/blog/',
    history: memoryHistory,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
}
