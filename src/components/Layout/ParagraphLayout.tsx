import { ReactNode } from 'react';

interface ParagraphLayoutProps {
    children: ReactNode;
}

export function ParagraphLayout({ children }: ParagraphLayoutProps) {
    return <div className="mb-4">{children}</div>;
}
