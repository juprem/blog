import { ReactNode } from 'react';

interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <div className="pt-4 flex items-center flex-col w-full">
            <div className="w-[55%]">{children}</div>
        </div>
    );
}
