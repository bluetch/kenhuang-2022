import Link from "next/link";
import { Icon } from "components";

const links = [
  {
    name: "facebook",
    url: "https://www.facebook.com/bluetch",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/bluetch/",
  },
  {
    name: "github",
    url: "https://github.com/bluetch",
  },
  {
    name: "medium",
    url: "https://medium.com/@bluetch",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-sm text-gray-400 text-center p-12 leading-6 mt-12 space-y-8">
      <p className="text-xl text-black">Feel free to reach out, I’d love to chat with you!</p>
      <p className="space-x-4">
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.name}>
              <a target="_blank" rel="noreferrer" className="inline-block shadow-lg rounded-lg p-4 border border-white hover:border-black">
                <Icon name={link.name} />
              </a>
            </Link>
          )
        })}
      </p>
      <p>
        <a href="maitl:bluetch@gmail.com">bluetch@gmail.com</a>
      </p>
      <p>© Ken Huang 2022 Copyright. All Rights Reserved.</p>
    </footer>
  );
};
