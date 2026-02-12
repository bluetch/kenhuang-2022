import { CategoryBar, Container, Layout, ContentList, Typography } from "components";
import { useMemo, useState } from "react";
import { PORTFOLIO } from "constants/portfolioData";
import { getSortedItemsByCategory } from "utils";

export default function Portfolio() {
  const [category, setCategory] = useState("");

  const data = useMemo(
    () => getSortedItemsByCategory(PORTFOLIO, category),
    [category]
  );

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
