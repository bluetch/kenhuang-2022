import { CategoryBar, Container, Layout, ContentList, Typography } from 'components';
import { dateConvert, getSortedItemsByCategory } from 'utils';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { SITE_META_DESCRIPTION, SITE_TAGLINE, SITE_TITLE } from 'constants/site';
import { ARTICLES } from 'constants/articles';
import { PORTFOLIO } from 'constants/portfolioData';

const HeroSection = () => {
  const backgroundCircles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className={`pt-64 lg:pb-32 text-center lg:h-[70vh] relative ${styles.index}`}>
      <Container className="space-y-16">
        <h1 className="font-light lg:text-4xl leading-relaxed text-black w-2/3 mx-auto">
          {SITE_TAGLINE}
        </h1>
        <img
          src="/images/about/kenhuang_avatar.png"
          alt="Ken Huang"
          className="w-32 mx-auto"
        />
      </Container>
      <ul className={styles.circles}>
        {backgroundCircles.map((index) => (
          <li key={`circle-${index}`}></li>
        ))}
      </ul>
    </section>
  );
};

const FeaturedPostsSection = ({ articles, category, onChangeCategory }) => {
  const items = articles.slice(0, 6);

  return (
    <section className="mb-32 bg-gradient-to-t from-gray-100 py-32">
      <Container>
        <Typography className="mb-12" variant="h2">
          Featured post
        </Typography>
        <CategoryBar
          type="articlesSpec"
          value={category}
          method={onChangeCategory}
        />
        <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2">
          {items.map((item) => {
            const isExternal = item.url.startsWith('http');
            return (
              <Link key={item.url} href={item.url} target={isExternal ? '_blank' : '_self'}>
                <figure className="bg-white shadow-md flex rounded-lg hover:opacity-75 hover:bg-gray-100 transition ease-in-out">
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover aspect-[1/1] w-1/4 m-4"
                  />
                  <figcaption className="p-4 pl-0 space-y-2 relative">
                    <p className="text-gray-500 text-sm">{dateConvert(item.date)}</p>
                    <Typography variant="h6" className="line-clamp-2 text-sm">
                      {item.name}
                    </Typography>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const FeaturedProjectsSection = ({ items, category, onChangeCategory }) => {
  return (
    <section className="my-32">
      <Container>
        <Typography className="mb-12" variant="h2">
          Featured project
        </Typography>
        <CategoryBar
          type="portfolioSpec"
          value={category}
          method={onChangeCategory}
        />
        <ContentList data={items} mode="portfolio" />
      </Container>
    </section>
  );
};

export default function Home() {
  const [portfolioCategory, setPortfolioCategory] = useState('');
  const [articleCategory, setArticleCategory] = useState('');

  const articleResult = useMemo(
    () => getSortedItemsByCategory(ARTICLES, articleCategory),
    [articleCategory]
  );

  const portfolioResult = useMemo(
    () => getSortedItemsByCategory(PORTFOLIO, portfolioCategory),
    [portfolioCategory]
  );

  return (
    <Layout title={SITE_TITLE} description={SITE_META_DESCRIPTION}>
      <HeroSection />
      <FeaturedPostsSection
        articles={articleResult}
        category={articleCategory}
        onChangeCategory={(code) => setArticleCategory(code)}
      />
      <FeaturedProjectsSection
        items={portfolioResult}
        category={portfolioCategory}
        onChangeCategory={(code) => setPortfolioCategory(code)}
      />
    </Layout>
  );
}
