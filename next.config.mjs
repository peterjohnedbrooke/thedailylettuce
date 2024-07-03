// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_SECRET:
      process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET,
    CONTENTFUL_REVALIDATE_SECRET:
      process.env.NEXT_PUBLIC_CONTENTFUL_REVALIDATE_SECRET,
    CONTENTFUL_MANAGEMENT_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN,
  },
};

export default nextConfig;
