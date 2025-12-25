import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

type Props = {
    title: string;
    content: string;
};

export default function PostPage({ title, content }: Props) {
    return (
        <article>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: false, // FULL SSG
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const { data, content } = getPostBySlug(slug);

    const processedContent = await remark()
        .use(html)
        .process(content);

    return {
        props: {
            title: data.title,
            content: processedContent.toString(),
        },
    };
};
