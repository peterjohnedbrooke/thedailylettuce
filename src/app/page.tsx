import {
  getArticles,
  getArticlesByCategory,
  getFeaturedArticles,
  getTrendingArticles,
} from './utils/contentful';
import Link from 'next/link';
import Layout from './layout/layout';
import Card from '../components/card/card';
import './home-page.css';
import { mapArticleToCardProps } from './utils/mappers/article.mapper';

type ArticleProps = {
  title: string;
  slug: string;
  description: string;
};

async function Home() {
  const featured = await getFeaturedArticles();
  const trending = await getTrendingArticles();
  const politics = await getArticlesByCategory('Politics');
  const business = await getArticlesByCategory('Business');
  const sports = await getArticlesByCategory('Sports');
  const culture = await getArticlesByCategory('Culture');

  const mappedFeatured = featured.map(mapArticleToCardProps);
  const mappedPolitics = politics.map(mapArticleToCardProps);
  const mappedBusiness = business.map(mapArticleToCardProps);
  const mappedSports = sports.map(mapArticleToCardProps);
  const mappedCulture = culture.map(mapArticleToCardProps);

  return (
    <Layout>
      <div className="wrapper">
        <div className="home__container">
          <article className="home__article">
            <div className="home__hero-container">
              {mappedFeatured && (
                <div className="home__featured-card">
                  <div className="home__title-container">
                    <h1 className="h1 home__title">Latest News</h1>
                    <div className="home__title-line"></div>
                  </div>
                  {mappedFeatured.map((article: any, index: number) => {
                    if (index > 0) return;
                    return (
                      <Link
                        className="home__featured-link"
                        href={`articles/${article.slug}`}
                        key={article.slug}
                      >
                        <Card {...article} featureCard index={index} />
                      </Link>
                    );
                  })}
                </div>
              )}
              {trending && (
                <div className="home__trending-news">
                  <div className="home__title-container">
                    <h2 className="h1 home__title">Trending</h2>
                    <div className="home__title-line"></div>
                  </div>
                  <ul
                    className="home__trending-list"
                    aria-label="Trending articles"
                  >
                    {trending.map((article: any) => (
                      <li
                        className="home__trending-item"
                        key={article.slug}
                        aria-label={article.title}
                      >
                        <Link
                          href={`articles/${article.slug}`}
                          passHref
                          className="home__trending-link"
                        >
                          <p>{article.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {mappedFeatured && (
              <div className="home__featured-news-row">
                {mappedFeatured.map((article: any, index: number) =>
                  index === 0 ? null : (
                    <Link
                      className="home__featured-link"
                      href={`articles/${article.slug}`}
                      key={article.slug}
                    >
                      <Card {...article} index={index} />
                    </Link>
                  ),
                )}
              </div>
            )}
            {mappedPolitics && mappedPolitics.length === 4 && (
              <div className="home__politics-news">
                <div className="home__title-container">
                  <Link href="/category/politics" className="home__title-link">
                    <h2 className="h2 home__title">Politics</h2>
                  </Link>
                  <div className="home__title-line"></div>
                  <Link href="/category/politics" className="home__title-link">
                    <h4 className="home__title">See all</h4>
                  </Link>
                </div>
                <div className="home__card-container">
                  {mappedPolitics.map((article: any) => (
                    <Link
                      className="home__card-link"
                      href={`articles/${article.slug}`}
                      key={article.slug}
                    >
                      <Card {...article} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {mappedBusiness && mappedBusiness.length === 4 && (
              <div className="home__business-news">
                <div className="home__title-container">
                  <Link href="/category/business" className="home__title-link">
                    <h2 className="h2 home__title">Business</h2>
                  </Link>
                  <div className="home__title-line"></div>
                  <Link href="/category/business" className="home__title-link">
                    <h4 className="home__title">See all</h4>
                  </Link>
                </div>
                <div className="home__card-container">
                  {mappedBusiness.map((article: any) => (
                    <Link
                      className="home__card-link"
                      href={`articles/${article.slug}`}
                      key={article.slug}
                    >
                      <Card {...article} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {mappedSports && mappedSports.length === 4 && (
              <div className="home__sports-news">
                <div className="home__title-container">
                  <Link href="/category/sports" className="home__title-link">
                    <h2 className="h2 home__title">Sports</h2>
                  </Link>
                  <div className="home__title-line"></div>
                  <Link href="/category/sports" className="home__title-link">
                    <h4 className="home__title">See all</h4>
                  </Link>
                </div>
                <div className="home__card-container">
                  {mappedSports.map((article: any) => (
                    <Link
                      className="home__card-link"
                      href={`articles/${article.slug}`}
                      key={article.slug}
                    >
                      <Card {...article} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {mappedCulture && mappedCulture.length === 4 && (
              <div className="home__culture-news">
                <div className="home__title-container">
                  <Link href="/category/culture" className="home__title-link">
                    <h2 className="h2 home__title">Culture</h2>
                  </Link>
                  <div className="home__title-line"></div>
                  <Link href="/category/culture" className="home__title-link">
                    <h4 className="home__title">See all</h4>
                  </Link>
                </div>
                <div className="home__card-container">
                  {mappedCulture.map((article: any) => (
                    <Link
                      className="home__card-link"
                      href={`articles/${article.slug}`}
                      key={article.slug}
                    >
                      <Card {...article} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
