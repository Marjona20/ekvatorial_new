import React from "react";

const sizeClasses = {
  txtAbhayaLibreExtraBold16WhiteA700:
    "font-abhayalibreextrabold font-extrabold",
  txtAbhayaLibreExtraBold24: "font-abhayalibreextrabold font-extrabold",
  txtAclonicaRegular32: "font-aclonica font-normal",
  txtAclonicaRegular128: "font-aclonica font-normal",
  txtAbhayaLibreExtraBold15: "font-abhayalibreextrabold font-extrabold",
  txtAbhayaLibreExtraBold16: "font-abhayalibreextrabold font-extrabold",
  txtAbhayaLibreExtraBold39: "font-abhayalibreextrabold font-extrabold",
  txtAclonicaRegular39: "font-aclonica font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtAbhayaLibreExtraBold96: "font-abhayalibreextrabold font-extrabold",
  txtInterMedium16: "font-inter font-medium",
  txtAclonicaRegular38: "font-aclonica font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
