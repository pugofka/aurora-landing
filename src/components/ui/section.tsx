import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string; // Sections must have IDs for navigation
    noPadding?: boolean;
}

export function Section({ id, className, noPadding, children, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={twMerge(
                'relative w-full overflow-hidden',
                !noPadding && 'py-20 md:py-32',
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
