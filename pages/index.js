import Head from 'next/head';
import { H1, H2, H3, H4, CategoryBar, Container, Layout } from 'components';
import { codeMapping, dateConvert, fetcher } from "utils";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Home() {
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
      <section className="my-32 text-center">
        <Container className="space-y-16">
          <H1>Designer, Frontend Developer & Mentor</H1>
          <p className="text-2xl text-gray-500">I design and code beautifully simple things, and I love what I do.</p>
          <img src="/images/about/kenhuang_avatar.png" alt="" className="w-1/4 mx-auto" />
          <img src="/images/home/hero_devices.svg" alt="" />
        </Container>
      </section>
      <section className="my-32 bg-gray-50 py-40">
        <Container>
          <H2>Featured posts</H2>
          {articles.map((item) => {
            return (
              <article>
                {item.name}
              </article>
            )
          })}
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
                    <figure className="flex flex-col space-y-4 hover:opacity-75">
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
