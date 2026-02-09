import { memo } from "react";

import FacebookIcon from "../assets/icons/facebook.svg";
import GithubIcon from "../assets/icons/github.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MediumIcon from "../assets/icons/medium.svg";
import PortfolioIcon from "../assets/icons/portfolio.svg";
import RefreshIcon from "../assets/icons/refresh.svg";
import SmileIcon from "../assets/icons/smile.svg";
import ToolsIcon from "../assets/icons/tools.svg";
import WorkIcon from "../assets/icons/work.svg";

// 靜態映射
const IconMap = {
  facebook: FacebookIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  portfolio: PortfolioIcon,
  refresh: RefreshIcon,
  smile: SmileIcon,
  tools: ToolsIcon,
  work: WorkIcon,
};

const IconNameOptions = Object.freeze(Object.keys(IconMap));

const Icon = memo(({ name, ...rest }) => {
  const Component = IconMap[name];
  if (!Component) throw new Error(`${name} not defined in IconNameOptions`);

  // When using Turbopack / Next's asset handling, importing an SVG may return
  // a structured image object like `{ src, width, height }` instead of a
  // React component. Handle both cases: render an <img> for image objects,
  // otherwise render the component directly.
  if (Component && typeof Component === "object" && Component.src) {
    const { src } = Component;
    return <img src={src} alt={name} {...rest} />;
  }

  return <Component {...rest} />;
});

Icon.displayName = "Icon";

export { Icon, IconNameOptions };
