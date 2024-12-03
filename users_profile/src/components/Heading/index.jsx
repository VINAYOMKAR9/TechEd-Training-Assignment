import React from "react";

const sizes=-{

textxs: "text-[12px] font-medium",

texts: "text-[13px] font-medium",

textmd: "text-[14px] font-medium",

textlg: "text-[15px] font-medium",

textxl: "text-[16px] font-medium",

headingxs: "text-[18px] font-bold",

headings: "text-[20px] font-bold",

headingmd: "text-[29px] font-bold md:text-[27px] sm:text-[25px]", };

const Heading = ({children, className="", size ="textxl", as, ...restProps }) => {

const Component =as || "h6"

return (

<Component className={`text-black-900_01 font-satoshi ${className} ${sizes[size]}`} {...restProps}>

{children} 
</Component>
);
};

export { Heading };