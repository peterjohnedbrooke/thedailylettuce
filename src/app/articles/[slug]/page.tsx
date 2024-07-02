import Layout from '@/app/layout/layout';
import './article-page.css';
import {
  getEntryBySlug,
  createContentClient,
  getArticlesByCategory,
  getFeaturedArticles,
  getTrendingArticles,
} from '../../utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mapArticleToCardProps } from '@/app/utils/mappers/article.mapper';
import Link from 'next/link';
import Card from '@/components/card/card';
import { formatDate } from '@/app/utils/formatDate';
import Sharing from '@/components/sharing/sharing';

const client = createContentClient();
export async function generateStaticParams() {
  const queryOptions = {
    content_type: 'article',
    select: 'fields.slug',
  };
  const articles = await client.getEntries(queryOptions);
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}

async function ArticlePage(props: { params: any }) {
  const { params } = props;
  const { slug } = params;
  const article = await getEntryBySlug(slug, 'article');
  const { title, content, image, thumbnail, sys, category, date } =
    article.fields as any;
  const relatedArticles = await getArticlesByCategory(category.fields.title);
  const trending = await getTrendingArticles();
  const mappedTrending = trending.map(mapArticleToCardProps);
  return (
    <Layout>
      <div className="wrapper">
        <div className="article__container">
          <article className="article">
            <h1 className="article__title">{title}</h1>
            {date && (
              <p className="article__date">Published {formatDate(date)}</p>
            )}
            {thumbnail && (
              <img
                src={`https:${thumbnail.fields.file.url}`}
                alt={title}
                className={'article__feature-image'}
              />
            )}
            <div className="article__content">
              {documentToReactComponents(content)}
              <Sharing />
            </div>
          </article>
          {relatedArticles && relatedArticles.length > 0 && (
            <aside className="article__aside">
              <div className="article__related-articles">
                <h2 className="article__related-title">Related</h2>
                <ul className="article__related-articles-list">
                  {relatedArticles.map((article: any, index: number) => {
                    if (article.slug === slug) return;
                    if (index > 4) return;
                    return (
                      <li>
                        <Link
                          href={`/articles/${article.slug}`}
                          key={article.slug}
                          passHref
                        >
                          <p>{article.title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          )}
        </div>
        <div className="article__trending-container">
          <h2 className="article__trending-title">Trending</h2>
          <div className="article__trending-cards">
            {mappedTrending.map((article: any, index: number) => {
              if (article.slug === slug) return;
              if (index > 2) return;
              return (
                <Link
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                  className="article__trending-card-link"
                >
                  <Card {...article} index={index} key={article.slug} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArticlePage;
