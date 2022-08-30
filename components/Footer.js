import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-sm text-gray-400 text-center p-4 lg:p-8 leading-6 mt-12">
      <p className="text-base text-black">2022 Ken Huang</p>
      <p className="space-x-4">
        <Link href="https://www.facebook.com/goodfinancetw/" passHref>
          <a target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:underline">
            Facebook
          </a>
        </Link>
        <span className="mx-2">|</span>
        <Link href="https://www.linkedin.com/company/%E5%A4%A7%E6%85%B6%E8%AD%89%E5%88%B8/">
          <a target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:underline">
            Linkedin
          </a>
        </Link>
        <span className="mx-2">|</span>
        <Link href="https://github.com/bluetch">
          <a className="hover:text-blue-500 hover:underline">GitHub</a>
        </Link>
      </p>
    </footer>
  );
};
