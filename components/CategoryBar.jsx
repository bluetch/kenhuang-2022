import { useState, useEffect } from "react";
import { articlesSpec, portfolioSpec } from "constants";

export const CategoryBar = ({ name = "", type, method, value = null }) => {
  const _data = type === "articlesSpec" ? articlesSpec : portfolioSpec;
  const [category, setCategory] = useState(value ?? null);

  useEffect(() => {
    setCategory(value ?? null);
  }, [value]);

  return (
    <div className="space-x-2 py-4 mb-4 rounded-lg">
      {/* {name ? `${name}:` : ""} */}
      {_data.map((item) => {
        let classType =
          "bg-white px-2 py-1 border rounded-lg text-sm hover:cursor-pointer hover:border-black ";
        if (category === item.code) {
          classType += "text-black border border-black hover:text-black";
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
