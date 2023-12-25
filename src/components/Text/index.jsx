import React from "react";

const sizeClasses = {
  txtArchivoSemiBold20: "font-archivo font-semibold",
  txtOswaldMedium30WhiteA700: "font-medium font-oswald",
  txtArchivoRegular20Gray50001: "font-archivo font-normal",
  txtOswaldMedium5027: "font-medium font-oswald",
  txtArchivoBold30: "font-archivo font-bold",
  txtArchivoSemiBold2233: "font-archivo font-semibold",
  txtOswaldSemiBold120: "font-oswald font-semibold",
  txtOswaldSemiBold42: "font-oswald font-semibold",
  txtOswaldMedium70: "font-medium font-oswald",
  txtArchivoBold16WhiteA700: "font-archivo font-bold",
  txtArchivoSemiBold1126: "font-archivo font-semibold",
  txtOswaldRegular2182: "font-normal font-oswald",
  txtArchivoBold30Gray900: "font-archivo font-bold",
  txtArchivoSemiBold24: "font-archivo font-semibold",
  txtArchivoMedium16: "font-archivo font-medium",
  txtOswaldSemiBold19868: "font-oswald font-semibold",
  txtOswaldRegular55: "font-normal font-oswald",
  txtOswaldSemiBold100: "font-oswald font-semibold",
  txtOswaldMedium30: "font-medium font-oswald",
  txtOswaldSemiBold100Gray90075: "font-oswald font-semibold",
  txtArchivoSemiBold20Gray50001: "font-archivo font-semibold",
  txtArchivoMedium20: "font-archivo font-medium",
  txtArchivoRegular20: "font-archivo font-normal",
  txtOswaldRegular20Gray900: "font-normal font-oswald",
  txtOswaldSemiBold42WhiteA700: "font-oswald font-semibold",
  txtArchivoBold16: "font-archivo font-bold",
  txtArchivoRegular16: "font-archivo font-normal",
  txtOswaldMedium30WhiteA70075: "font-medium font-oswald",
  txtArchivoRegular16Gray900: "font-archivo font-normal",
  txtOswaldMedium70Gray900: "font-medium font-oswald",
  txtArchivoSemiBold16: "font-archivo font-semibold",
  txtOswaldRegular100: "font-normal font-oswald",
  txtOswaldRegular20: "font-normal font-oswald",
  txtOswaldRegular42: "font-normal font-oswald",
  txtOswaldSemiBold32: "font-oswald font-semibold",
  txtOswaldMedium42: "font-medium font-oswald",
  txtOswaldMedium20: "font-medium font-oswald",
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
