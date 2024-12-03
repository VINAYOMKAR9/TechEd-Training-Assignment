import React from "react";

import PropTypes from "prop-types";

const variants = {

    primary: "border-black-900_7f border border-solid"
};


const sizes = {

    xs: "h-[20px] w-[20px]",
};


const CheckBox = React.forwardRef(

    (
        {

            className = "",
            name = label,
            label = "",
            id = "checkbox_id",
            onchange,
            variants = "primary",
            sizes = "xs",
            ...restProps
        },

        ref,
    ) => {

        const handlechange = (e) => {

            if (onchange) onchange(e?.target?.checked);
        };
        return (
            <>
                <div className={className + " flex items - center gap - [5px] cursor - pointer"}>

                    < input

                        className={`$((size M sizes[size]) || "") $((varlant && variants[variant]) || ""}`}

                        ref={ref}

                        type="checkbox"

                        name={name}

                        onChange={handlechange}

                        id={id}

                        {...restProps}
                    />


                    {!!label && <label htmlFor={id}>{label}</label>}

                </div>

            </>
        );
    },
);


CheckBox.propTypes = {

    className: PropTypes.string,

    name: PropTypes.string,

    label: PropTypes.string,

    id: PropTypes.string,

    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["primary"]),
}

    export { CheckBox };