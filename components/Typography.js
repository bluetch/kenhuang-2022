

export const Typography = ({ className = "", variant = "h4", children, ...rest }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`text-4xl font-bold mb-8 ${className}`} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`text-3xl font-bold mb-6 ${className}`} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`text-2xl font-bold mb-4 ${className}`} {...rest}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`text-xl font-bold mb-3 ${className}`} {...rest}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`font-bold text-base mb-2 ${className}`} {...rest}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`font-bold text-sm mb-1 ${className}`} {...rest}>
          {children}
        </h6>
      );
    default:
      return <>{children}</>;
  }
}
