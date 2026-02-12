
import { CategoryBar, Container, Layout, ContentList, Typography } from "components";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ARTICLES } from "constants/articles";

export default function Content() {
  const portfolio = ARTICLES;
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
          value={category}
          method={(code) => setCategory(code)}
        />
        <ContentList data={data} mode="article" />
      </Container>
    </Layout>
  );
}
