import {
    judahuiPrimaryBtn,
    judahuismBtn,
    judahuimdBtn,
    judahuilgBtn,
    judahuixlBtn,
    judahui2xlBtn,
    judahuiblockBtn,
    judahuidisableBtn,
    spinner,
} from "./button.module.css";
import { Loader } from "../loader";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ButtonProps {
    /**
     * This is the content of the button, which could either a text or a react node.
     */

    children: string | React.ReactNode;

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

    /** Other unknown props */

    [x: string]: unknown;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    handleClick,
    size = "lg",
    iconRight,
    block,
    isLoading,
    isDisabled,
    type = "button",
    ...props
}: ButtonProps) => {
    const btn = {
        sizes: {
            sm: judahuismBtn,
            md: judahuimdBtn,
            lg: judahuilgBtn,
            xl: judahuixlBtn,
            "2xl": judahui2xlBtn,
        },
        theme: {
            primary: "",
            secondary: "",
            tertiary: "",
        },
    };

    return (
        <button
            className={[
                judahuiPrimaryBtn,
                btn.sizes[size],
                block ? judahuiblockBtn : "",
                isDisabled ? judahuidisableBtn : "",
            ]
                .join(" ")
                .trim()}
            onClick={handleClick}
            type={type}
            disabled={isDisabled || isLoading}
            {...props}
        >
            {isLoading && ["sm", "md", "lg"].includes(size) ? null : children}

            <span className="lib-ml-2">
                {isLoading && <Loader className={spinner} />}
            </span>

            {iconRight && <div className="lib-ml-4">{iconRight}</div>}
        </button>
    );
};
