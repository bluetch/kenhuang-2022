import { CategoryBar, Container, Layout, PortfolioList, Typography } from "components";
import { useEffect, useState, useMemo } from "react";
import { fetcher } from "utils";

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
        <Typography variant="h1">Portfolio</Typography>
        <CategoryBar
          data="portfolioSpec"
          method={(e) => setCategory(e)}
        />
        <PortfolioList data={data} layout="list"/>
      </Container>
    </Layout>
  );
}
