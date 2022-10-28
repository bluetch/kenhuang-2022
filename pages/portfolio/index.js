import { CategoryBar, Container, H1, H2, H3, H4, Layout, PortfolioList } from "components";
import { useEffect, useState, useMemo } from "react";
import { fetcher } from "utils";
import Link from "next/link";
import { portfolioSpec } from "constants";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [category, setCategory] = useState("");

  const data = useMemo(() => {
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
    fetcher("/api/portfolio", { setState: setPortfolio });
  }, []);

  return (
    <Layout title="Portfolio | Ken Huang">
      <Container>
        <H1 className="mt-40">Portfolio</H1>
        <CategoryBar
          data="portfolioSpec"
          method={(e) => setCategory(e)}
        />
        <PortfolioList data={data} layout="list"/>
      </Container>
    </Layout>
  );
}
