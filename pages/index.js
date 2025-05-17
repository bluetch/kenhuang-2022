import Head from 'next/head';
import { CategoryBar, Container, Layout, PortfolioList, Typography } from 'components';
import { dateConvert, fetcher } from "utils";
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
    <Layout title="Ken Huang | Front-end Developer, Product Designer & Mentor">
      <Head>
        <title>Ken Huang | Front-end Developer, Product Designer & Mentor</title>
        <meta name="description" content="I design and code beautifully simple things, and I love what I do." />
      </Head>
      <section className={`pt-64 lg:pb-32 text-center lg:h-[70vh] relative ${styles.index}`}>
        <Container className="space-y-16">
          <h1 className="font-light lg:text-4xl leading-relaxed text-black w-2/3 mx-auto">Hi, I am Ken Huang, a passionate Front-end engineer / product designer from Taipei, Taiwan.</h1>
          <img src="/images/about/kenhuang_avatar.png" alt="Ken Huang" className="w-32 mx-auto" />
          <p className="text-xl text-red-500">Play every where</p>
        </Container>
        <ul className={styles.circles}>
          {circles.map((index) => <li key={`circle-${index}`}></li>)}
        </ul>
      </section>
      <section className="mb-32 bg-gradient-to-t from-gray-100 py-32">
        <Container>
          <Typography className="mb-12" variant="h2">Featured post</Typography>
          <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2">
            {articles.map((item) => {
              return (
                <Link key={item.url} href={item.url} target="_blank">
                  <figure className="bg-white shadow-md flex rounded-lg hover:opacity-75 hover:bg-gray-100 transition ease-in-out">
                    <img src={item.img} alt="" className="object-cover aspect-[1/1] w-1/4 m-4" />
                    <figcaption className="p-4 pl-0 space-y-2 relative">
                      <p className="text-gray-500 text-sm">{dateConvert(item.date)}</p>
                      <Typography variant="h6" className="line-clamp-2 text-sm">{item.name}</Typography>
                    </figcaption>
                  </figure>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="my-32">
        <Container>
          <Typography className="mb-12" variant="h2">Featured project</Typography>
          <CategoryBar
            data="portfolioSpec"
            method={(e) => setCategory(e)}
          />
          <PortfolioList data={portfolioResult} />
        </Container>
      </section>
    </Layout>
  )
}
