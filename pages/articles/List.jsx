
import { CategoryBar, Container, Layout, ContentList, Typography } from "components";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { fetcher } from "utils";

export default function Content() {
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
    fetcher("/api/articles", { setState: setPortfolio });
  }, []);
  
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query?.type;
    if (q) setCategory(q);
  }, [router.isReady, router.query]);

  return (
    <Layout
      title="Articles | Ken Huang"
      description="Writing by Ken Huang on front-end engineering, product design, and career."
    >
      <Container>
        <Typography variant="h1">Article</Typography>
        <CategoryBar
          type="articlesSpec"
          method={(e) => setCategory(e)}
          value={category}
        />
        <ContentList data={data} mode="article" />
      </Container>
    </Layout>
  );
}
