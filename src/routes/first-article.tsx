import { createFileRoute } from '@tanstack/react-router';
import { FirstArticle } from '@/articles/FirstArticle/FirstArticle.tsx';

export const Route = createFileRoute('/first-article')({
    component: () => <FirstArticle />,
});
