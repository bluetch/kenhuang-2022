// import { Shalimar } from "@next/font/google";
import { Container } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// const font = Shalimar({
//   weight: "400"
// });

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const LINKS = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      label: "Writing",
      path: "https://medium.com/@bluetch",
    },
    {
      label: "Mentorship",
      path: "/mentorship",
    },
    // {
    //   label: "Contact",
    //   path: "/contact",
    // },
  ];

  const router = useRouter();

  const show = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 bg-white lg:py-4 ${scrolling && "shadow-md"}`}>
      <Container>
        <div className="flex flex-wrap justify-between items-center py-4 lg:py-0">
          <Link href="/" className="flex items-center group">
            <img src="/images/k-logo.png" alt="Ken Huang" className="w-8" />
            <span className="px-4 text-gray-300">|</span>
            <span className="font-bold text-xl lg:text-2xl group-hover:text-gray-500 transition">
              Ken Huang
            </span>
          </Link>
          <nav
            className={`overflow-visible ${open ? "translate-x-0" : "-translate-x-full lg:-translate-x-0"
              } text-gray-700 bg-gray-50 lg:bg-transparent transform transition-all w-2/3 lg:w-auto flex flex-col lg:flex-row fixed lg:static left-0 top-0 bottom-0 overflow-auto z-50 p-2 lg:p-0 shadow-lg lg:shadow-none`}
          >
            {LINKS.map((link) => {
              let targetNew = false;
              if (link.path.indexOf("http") == 0) targetNew = true;
              return (
                <Link href={link.path} key={link.path} className={`px-4 py-2 flex items-center rounded-full
                ${router.asPath === link.path
                    ? "text-white bg-black"
                    : "hover:text-gray-500 hover:bg-gray-100"
                  }`}
                  target={targetNew ? "_blank" : ""}
                  onClick={show}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={show}
            className={`${open
              ? "text-blue-500 rotate-90"
              : "text-gray-700 hover:text-blue-500"
              } absolute transform transition-all duration-300 lg:hidden right-0 top-0 bottom-0 z-10 p-4 w-16 space-y-1.5`}
          >
            {[1, 2, 3].map((line) => (
              <span
                key={line}
                className="w-full border-2 rounded border-current block"
              ></span>
            ))}
          </button>
        </div>
      </Container>
    </header>
  )
}