import { Icon } from "components";
import Link from "next/link";
import { forwardRef, memo } from "react";

export const Button = memo(
  forwardRef(
    (
      {
        children,
        onClick,
        disabled,
        icon = {},
        href = null,
        link = false,
        className = "",
        responsive = false,
        variant = "primary",
        type = "button",
        ...rest
      },
      ref
    ) => {
      const clsx = (conditionals, others) => {
        return [
          others,
          Object.keys(conditionals)
            .filter((key) => conditionals[key])
            .join(" "),
        ].join(" ");
      };
      const variants = {
        primary:
          "cursor-pointer py-3 px-8 bg-sky-600 hover:bg-sky-700 text-white flex-shrink-0 rounded-full h-12",
        ["primary-outline"]:
          "cursor-pointer py-3 px-8 bg-white border border-sky-600 hover:bg-sky-700 hover:text-white text-sky-700 rounded-full h-12",
        // primary:
        //   "bg-gradient-to-r from-blue-light to-purple-light text-gray-darker md:hover:from-[#78DAFF] md:hover:to-[#BAD3FF] active:from-[#78DAFF] active:to-[#BAD3FF]",
        secondary:
          "bg-white md:hover:bg-blue-lightest md:hover:bg-opacity-70 active:bg-white text-blue-light ring-1 ring-blue-light",
        plain:
          "text-blue-light md:hover:bg-blue-lightest active:bg-white md:hover:bg-opacity-70",
        link: "",
        action:
          "text-white bg-gray-darker md:hover:bg-opacity-70 active:bg-opacity-100",
      }[variant];

      const iconSize = {
        xs: "h-4 w-4",
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      }[icon.size || "md"];

      const Tag = link ? "span" : href ? "a" : "button";

      const element = (
        <Tag
          {...rest}
          onClick={onClick}
          ref={ref}
          disabled={disabled}
          type={type}
          href={href}
          className={clsx(
            {
              "opacity-40 pointer-events-none": disabled,
            },
            `p-3 text-center appearance-none rounded-full flex items-center justify-center space-x-2 transition-all duration-300 focus:outline-none ${variants} ${className}`
          )}
        >
          {icon.name && (
            <span
              className={clsx(
                { "inline-block md:hidden": responsive },
                `${iconSize} ${icon.classes} shrink-0`
              )}
            >
              <Icon name={icon.name} />
            </span>
          )}
          {children && (
            <span className={clsx({ "hidden md:inline-block": responsive })}>
              {children}
            </span>
          )}
        </Tag>
      );

      return link ? (
        <Link href={href}>
          <a
            onClick={(e) => (disabled ? e.preventDefault() : "")}
            className={className}
          >
            {element}
          </a>
        </Link>
      ) : (
        element
      );
    }
  )
);

Button.displayName = "Button";