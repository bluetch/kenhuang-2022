
export const H1 = ({ className = "", children }) => {
  return (
    <h1 className={`lg:text-5xl text-3xl font-bold lg:my-16 my-4 ${className}`}>{children}</h1>
  );
}

export const H2 = ({ className = "", children }) => {
  return (
    <h2 className={`lg:text-3xl lg:mb-12 text-xl font-bold ${className}`}>{children}</h2>
  );
}

export const H3 = ({ className = "", children }) => {
  return (
    <h3 className={`text-2xl font-medium my-4 ${className}`}>{children}</h3>
  );
}

export const H4 = ({ className = "", children }) => {
  return (
    <h4 className={`lg:text-xl text-black ${className}`}>{children}</h4>
  );
}

export const H5 = ({ className = "", children }) => {
  return (
    <h5 className={`text-lg ${className}`}>{children}</h5>
  );
}

export const H6 = ({ className = "", children }) => {
  return (
    <h6 className={`text-base ${className}`}>{children}</h6>
  );
}