import Layout from '@/app/layout/layout';
import {
  createContentClient,
  getArticlesByCategory,
  getEntryBySlug,
} from '@/app/utils/contentful';
import { mapArticleToCardProps } from '@/app/utils/mappers/article.mapper';
import Card from '@/components/card/card';
import Link from 'next/link';
import './category-page.css';

const client = createContentClient();
export async function generateStaticParams() {
  const queryOptions = {
    content_type: 'category',
    select: 'fields.slug',
  };
  const categories = await client.getEntries(queryOptions);
  return categories.items.map((category) => ({
    slug: category.fields.slug,
  }));
}

async function CategoryPage(props: { params: any }) {
  const { params } = props;
  const { slug } = params;
  const category = await getEntryBySlug(slug, 'category');
  const { title, description, sys } = category.fields as any;
  const articles = await getArticlesByCategory(title);
  const mappedArticles = articles.map(mapArticleToCardProps);
  return (
    <Layout>
      <div className="wrapper">
        <div className="category-page__container">
          <h1 className="category-page__title">{title}</h1>
          <p className="category-page__description">{description}</p>
          <article className="category-page__article">
            <div className="category-page__card-feature">
              {mappedArticles.map((article: any, index: number) => {
                if (index > 0) return;
                return (
                  <section key={article.slug}>
                    <Link href={`/articles/${article.slug}`} passHref>
                      <Card
                        {...article}
                        category={title}
                        featureCard
                        index={index}
                      />
                    </Link>
                  </section>
                );
              })}
            </div>
            <div className="category-page__card-row">
              {mappedArticles.map((article: any, index: number) => {
                if (index === 0) return;
                return (
                  <section key={article.slug}>
                    <Link href={`/articles/${article.slug}`} passHref>
                      <Card
                        {...article}
                        category={title}
                        featureCard
                        index={index}
                      />
                    </Link>
                  </section>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage;
