import { CategoryBar, Container, Layout, ContentList, Typography } from "components";
import { useMemo, useState } from "react";
import { PORTFOLIO } from "constants/portfolioData";

export default function Portfolio() {
  const portfolio = PORTFOLIO;
  const [category, setCategory] = useState("");

  const data = useMemo(() => {
    return portfolio
      .slice() // avoid mutating the original constant array
      .sort((a, b) => (a.date > b.date ? -1 : 1))
      .filter((item) => {
        if (category) {
          return item.category.includes(category);
        }
        return true;
      });
  }, [category, portfolio]);

  return (
    <Layout
      title="Portfolio | Ken Huang"
      description="Selected product design and front-end projects by Ken Huang. Case studies across UX, UI, and engineering."
    >
      <Container>
        <Typography variant="h1">Portfolio</Typography>
        <CategoryBar
          type="portfolioSpec"
          value={category}
          method={(code) => setCategory(code)}
        />
        <ContentList data={data} mode="portfolio" />
      </Container>
    </Layout>
  );
}
