import { primaryStyle } from "./button.module.css";

export interface ButtonProps {
    title: string | JSX.Element;
    handleClick?: () => void;
    className?: string;
}

export const Button = ({ title, handleClick, className }: ButtonProps) => {
    return (
        <button
            className={`${className} ${primaryStyle}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};
