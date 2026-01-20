'use client';

import { ReactLenis as Lenis } from 'lenis/react';

export function ReactLenis({
    root,
    options,
    children,
    ...props
}: {
    root?: boolean;
    options?: any;
    children: React.ReactNode;
    [key: string]: any;
}) {
    return (
        <Lenis root={root} options={options} {...props}>
            {children}
        </Lenis>
    );
}
