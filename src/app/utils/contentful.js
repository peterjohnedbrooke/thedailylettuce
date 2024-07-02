import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getArticles = async () => {
  const results = await getEntriesByType('article');
  const articles = results.map((article) => article.fields);
  return articles;
};

export const getTrendingArticles = async () => {
  const results = await getEntriesByType('article');
  const articles = results
    .map((article) => article.fields)
    .filter((article) => article.trending)
    .filter((article) => article.featured !== true)
    .slice(0, 6);
  return articles;
};

export const getFeaturedArticles = async () => {
  const results = await getEntriesByType('article');
  const articles = results
    .map((article) => article.fields)
    .filter((article) => article.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Assuming 'date' is the field name
    .slice(0, 5);
  return articles;
};

export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    'fields.slug[match]': slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export const getArticlesByCategory = async (categoryTitle) => {
  const results = await getEntriesByType('article');
  const articles = results
    .map((article) => {
      const category =
        article.fields.category && article.fields.category.fields;
      return { ...article.fields, category };
    })
    .filter(
      (article) => article.category && article.category.title === categoryTitle,
    )
    .filter((article) => article.featured !== true)
    .slice(0, 4);

  return articles;
};
