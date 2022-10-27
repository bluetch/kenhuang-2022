import { CategoryBar, Container, H1, H2, H3, H4, Layout } from "components";
import { useEffect, useState, useMemo } from "react";
import { codeMapping, dateConvert, fetcher } from "utils";
import Link from "next/link";
import { portfolioSpec } from "constants";

export default function Portfolio() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");

  const displayTerms = useMemo(() => {
    return articles
      .sort((a, b) => (a.date > b.date ? -1 : 1))
      .filter((item) => {
        if (category) {
          return item.category.includes(category);
        }
        return true;
      });
  }, [category, articles]);

  useEffect(() => {
    fetcher("/api/portfolio", { setState: setArticles });
  }, []);

  return (
    <Layout title="Portfolio | Ken Huang">
      <Container>
        <H1>Portfolio</H1>
        <CategoryBar
          data="portfolioSpec"
          method={(e) => setCategory(e)}
        />
        <section className="grid grid-cols-2 gap-20 mb-20">
          {displayTerms.map((article) => {
            return (
              <Link key={article.name} href={article.url} className="group transition">
                <figure className="flex space-x-4">
                  <img
                    src={article.img}
                    alt={article.name}
                    className="w-1/3 object-cover aspect-[4/3] group-hover:opacity-50 transform transition-all duration-300 rounded"
                  />
                  <figcaption className="w-2/3 pl-4 space-y-2">
                    <p className="text-gray-400 text-sm">
                      {dateConvert(article.date, "year")}
                      {" | "}
                      {article.category.join(" / ").toUpperCase()}
                      {/* {codeMapping({key: article.category[0], data: spec})} */}
                    </p>
                    <H4>
                      {article.name}
                    </H4>
                    <p className="text-gray-500 leading-6 max-h-24 overflow-ellipsis overflow-hidden">
                      {article.desc}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </section>
      </Container>
    </Layout>
  );
}
