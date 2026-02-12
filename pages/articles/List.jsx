
import { CategoryBar, Container, Layout, ContentList, Typography } from "components";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ARTICLES } from "constants/articles";
import { getSortedItemsByCategory } from "utils";

export default function Content() {
  const [category, setCategory] = useState("");

  const data = useMemo(
    () => getSortedItemsByCategory(ARTICLES, category),
    [category]
  );

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
