import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[14px]",
};

const variants = {
    outline: {

        gray_400: "border-gray-400 border border-solid",

        gray_300_01: "border-gray-300_01 border border-solid text-blue_gray-800",

    },

    fill: {

        blue_gray_900_01: "bg-blue_gray-900_01 text-gray-100",

        gray_400_01: "bg-gray-400_01 text-black-900_01",

        blue_gray_900: "bg-blue_gray-900 text-white-a700",
    },
};

const sizes = {

    sm: "h-[44px] px-2.5",

    xs: "h-[30px] px-3 text-[14px]",

    lg: "h-[60px] px-[34px] text-[14px]",
    md: "h-[44px] p1-5 pr-3.5 text-[16px]",

};

const Button = ({


        children,

        className,
        
        leftIcon,

        rightIcon,

        shape,

        variant = "fill",

        size = "md",

        color = "blue_gray_900",

        ...restProps
    }) =>{
        return (

            <button

                className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes [size]} ${variant && variants[variant]?.[color]}`}

                {...restProps}
                >

                    {!!leftIcon && leftIcon}
                    {children}
                    {!!rightIcon && rightIcon}      
        
        </button >
        
        );
    }

Button.propTypes = {

    className: PropTypes.string,
     children: PropTypes.node,

    lefticon: PropTypes.node,

    righticon: PropTypes.node,

    shape: PropTypes.oneOf(["round"]),

    size: PropTypes.oneOf(["sa", "xs", "lg", "md"]),
    variant: PropTypes.oneOf(["outline", "fill"]),

    color: PropTypes.oneOf(["gray_400", "gray_300_01", "blue_gray_900_01", "gray_400_01", "blue_gray_900"]),
};
        
export {Button};