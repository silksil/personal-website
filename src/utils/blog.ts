import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
// import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import { IData, IPost } from 'src/@types/blog';
import rehypeHighlight from 'rehype-highlight';

const POST_PATH = '/src/_posts';

const normalizeArticleData = (frontMatter: any, content: any, slug: string): IData => {
  return {
    coverImage: frontMatter.cover_image,
    excerpt: frontMatter.excerpt,
    slug: slug,
    title: frontMatter.title,
    date: new Date(frontMatter.date).toISOString(),
    readingTime: Math.ceil(readingTime(content).minutes),
  };
};

export const getPost = async ({ slug }: { slug: string }) => {
  const { data, content } = getArticleData({ slug });

  const source = await serialize(content, {
    // parseFrontmatter: false,

    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  const { compiledSource } = source;

  return {
    data,
    source: {
      compiledSource,
    },
  };
};

export const getAllPosts = (): IPost[] => {
  const articles = fs.readdirSync(path.join(process.cwd(), POST_PATH));

  return articles.reduce((allArticles: any, articleSlug: string) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(path.join(process.cwd(), POST_PATH, articleSlug), 'utf-8');
    const { data, content } = matter(source);

    return [
      {
        data: normalizeArticleData(data, content, articleSlug.replace('.mdx', '')),
      },
      ...allArticles,
    ];
  }, []);
};

export const getArticleData = ({ slug }: { slug: string }): IPost => {
  const fullPath = path.join(process.cwd(), POST_PATH, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(raw);

  return {
    data: normalizeArticleData(data, content, slug),
    content,
  };
};

export const getArticleSlugs = (): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), POST_PATH))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ''));
