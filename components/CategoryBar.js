import { useState, useEffect } from "react";
import portfolioSpec from 'constants';

export const CategoryBar = ({ name = "", data = [], method }) => {
  const _data = portfolioSpec.portfolioSpec;
  const [category, setCategory] = useState(null);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className="space-x-2 py-4 mb-4 rounded-lg">
      {/* {name ? `${name}:` : ""} */}
      {!isSSR && _data.map((item) => {
        let classType =
          "bg-white px-2 py-1 border rounded-lg text-sm hover:cursor-pointer hover:border-blue-500 hover:text-blue-500 ";
        if (category === item.code) {
          classType += "text-blue-500 border-blue-500";
        } else {
          classType += "text-gray-400";
        }
        return (
          <span
            className={classType}
            key={item.name}
            onClick={() => {
              setCategory(item.code);
              method(item.code);
            }}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
};
