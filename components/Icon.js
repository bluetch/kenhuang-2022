import dynamic from "next/dynamic";
import { memo } from "react";

const IconNameOptions = Object.freeze([
  "facebook",
  "github",
  "instagram",
  "linkedin",
  "medium",
  "portfolio",
  "refresh",
  "smile",
  "tools",
  "work",
]);

const Icon = memo(({ name, ...rest }) => {
  if (!IconNameOptions.includes(name)) {
    throw new Error(`${name} is not defined in IconNameOptions`);
  }

  const DynamicIcon = dynamic(() => import(`/assets/icons/${name}.svg`));

  return <DynamicIcon {...rest} />;
});

Icon.displayName = "Icon";

export { IconNameOptions, Icon };
