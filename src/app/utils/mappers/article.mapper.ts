export const mapArticleToCardProps = (article: any) => {
  return {
    title: article.title,
    description: article.description,
    // id: article.sys.space.sys.id,
    content: article.content,
    date: article.date,
    image: article.image ? `https:${article.image.fields.file.url}` : null,
    thumbnail: article.thumbnail
      ? `https:${article.thumbnail.fields.file.url}`
      : null,
    slug: article.slug ? article.slug : null,
    category: article.category
      ? article.category.fields?.title
      : article.category.title
        ? article.category.title
        : null,
    featured: article.featured ? article.featured : false,
  };
};
