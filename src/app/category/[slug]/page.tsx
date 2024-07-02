import Layout from '@/app/layout/layout';
import {
  createContentClient,
  getArticlesByCategory,
  getEntryBySlug,
} from '@/app/utils/contentful';
import Link from 'next/link';

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
  return (
    <Layout>
      <div className="wrapper">
        <div className="category-page__container">
          <h1 className="category-page__title">{title}</h1>
          <p className="category-page__description">{description}</p>
          <ul className="category-page__articles">
            {articles.map((article: any) => {
              return (
                <li key={article.slug}>
                  <Link href={`/articles/${article.slug}`} passHref>
                    <span>{article.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage;
