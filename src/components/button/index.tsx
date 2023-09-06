import {
    judahuiPrimaryBtn,
    judahuismBtn,
    judahuimdBtn,
    judahuilgBtn,
    judahuixlBtn,
    judahui2xlBtn,
    judahuiblockBtn,
} from "./button.module.css";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps {
    /**
     * This is the content of the button, which could either a text or a react node.
     */

    children: string | JSX.Element;

    /**
     * A callback function that is called when the button is clicked
     *
     * @returns
     */

    handleClick?: () => void;

    /**
     * This allows for adding inline styles to extend the already existing styles
     * defined by various properties
     *
     * @default null
     */

    className?: string;

    /**
     * isDisabled is for setting the button not to be clickable when the prop is set to
     * true
     */

    isDisabled?: boolean;

    /**
     * This sets the button to load up a loading animation on until the process leading to the loading
     * is completed
     */

    isLoading?: boolean;

    iconRight?: React.ReactNode;

    /**
     *
     * This is a list of predefined styles that the users can select from
     * "sm" | "md" | "lg" | "xl" | "2xl";
     *
     * This can also be extended by the means of the className props
     */

    size?: ButtonSize;

    /**
     *
     * This is the type of the button, whether it applies to a form or
     */
    type?: "button" | "submit" | "reset";

    /**
     *
     * This is is a prop to request whether the button fills up its container
     */
    block?: boolean | string;
}

export const Button = ({
    children,
    handleClick,
    className,
    size = "md",
    iconRight,
    block,
    isLoading,
    isDisabled,
    type = "button",
}: ButtonProps) => {
    const selectedSize = (size: ButtonSize) => {
        switch (size) {
            case "sm":
                return judahuismBtn;
                break;
            case "md":
                return judahuimdBtn;
                break;
            case "lg":
                return judahuilgBtn;
                break;
            case "xl":
                return judahuixlBtn;
                break;
            case "2xl":
                return judahui2xlBtn;
                break;
            default:
                return judahuimdBtn;
        }
    };

    return (
        <button
            className={`
            ${
                typeof className === "string" ? className : ""
            } ${judahuiPrimaryBtn} ${selectedSize(size)} ${
                block ? judahuiblockBtn : ""
            }`}
            onClick={handleClick}
            type={type}
            disabled={isDisabled || isLoading}
        >
            {children}

            {iconRight && <div className="lib-ml-4">{iconRight}</div>}
        </button>
    );
};
