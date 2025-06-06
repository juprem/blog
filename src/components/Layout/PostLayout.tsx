import { ReactNode } from 'react';

interface PostLayoutProps {
    children: ReactNode;
}

export function PostLayout({ children }: PostLayoutProps) {
    return <div className="w-[700px] text-justify ">{children}</div>;
}
