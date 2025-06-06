import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from '../components/Layout/Header.tsx';
import { Content } from '@/components/Layout/Content.tsx';

export const Route = createRootRoute({
    component: () => <Root />,
});

function Root() {
    return (
        <Content>
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </Content>
    );
}
