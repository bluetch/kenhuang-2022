import Head from 'next/head';
import { H1, H2, H3, H4, H6, CategoryBar, Container, Layout } from 'components';
import { codeMapping, dateConvert, fetcher } from "utils";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Home() {
  const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [articles, setArticles] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [category, setCategory] = useState("");

  const portfolioResult = useMemo(() => {
    return portfolio
      .sort((a, b) => (a.date > b.date ? -1 : 1))
      .filter((item) => {
        if (category) {
          return item.category.includes(category);
        }
        return true;
      });
  }, [category, portfolio]);

  useEffect(() => {
    fetcher("/api/articles", { setState: setArticles });
    fetcher("/api/portfolio", { setState: setPortfolio });
  }, []);

  return (
    <Layout title="Ken Huang | Front-end Developer, Product Designer & Mentor" className={styles.index}>
      <Head>
        <title>Ken Huang | Front-end Developer, Product Designer & Mentor</title>
        <meta name="description" content="I design and code beautifully simple things, and I love what I do." />
      </Head>
      <section className={`pt-64 pb-32 text-center h-[70vh] relative ${styles.index}`}>
        <Container className="space-y-16">
          <h1 className="font-light text-4xl leading-relaxed text-black w-2/3 mx-auto">Hi, I am Ken Huang, a passionate Front-end engineer / product designer from Taipei, Taiwan.</h1>
          <img src="/images/about/kenhuang_avatar.png" alt="" className={styles.portrait} />
          <p className="text-xl text-red-500">Design Everywhere!</p>
        </Container>
        <ul className={styles.circles}>
          {circles.map((index) => <li key={`circle-${index}`}></li>)}
        </ul>
      </section>
      <section className="mb-32 bg-gradient-to-t from-gray-100 py-32">
        <Container>
          <H2 className="mb-12">Featured posts</H2>
          <div className="grid grid-cols-3 gap-8">
            {articles.map((item) => {
              return (
                <Link key={item.url} href={item.url}>
                  <a className="" target="_blank">
                    <figure className="bg-white shadow-md flex rounded-lg hover:opacity-75 hover:bg-sky-50 transition ease-in-out">
                      <img src={item.img} alt="" className="object-cover aspect-[1/1] w-1/4 m-4" />
                      <figcaption className="p-4 pl-0 space-y-2 relative">
                        <p className="text-gray-500 text-sm">{dateConvert(item.date)}</p>
                        <H6 className="line-clamp-2 text-sm">{item.name}</H6>
                      </figcaption>
                    </figure>
                  </a>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container>
          <H2>Portfolio</H2>
          <CategoryBar
            data="portfolioSpec"
            method={(e) => setCategory(e)}
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-20">
            {portfolioResult.map((item) => {
              if (!item.state) return;
              return (
                <Link key={item.url} href={item.url}>
                  <a className="">
                    <figure className="flex flex-col space-y-4 transition ease-in-out hover:opacity-75">
                      <img src={item.img} alt={item.name} className="rounded-lg object-cover aspect-[4/3]" />
                      <figcaption className="">
                        <H4>{item.name}</H4>
                        <p className="text-gray-500">{item.desc}</p>
                        <span>{item.date}</span>
                      </figcaption>
                    </figure>
                  </a>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
    </Layout>
  )
}
