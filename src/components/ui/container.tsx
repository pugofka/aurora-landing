import { forwardRef } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    fluid?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, fluid, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    'mx-auto w-full px-4 sm:px-6 lg:px-8',
                    fluid ? 'max-w-full' : 'max-w-7xl',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = 'Container';
