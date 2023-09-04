type ButtonType = {
    title: string | JSX.Element;
    handleClick?: () => void;
    className?: string;
};

const Button = ({ title, handleClick, className }: ButtonType) => {
    return (
        <button className={`${className}`} onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;
