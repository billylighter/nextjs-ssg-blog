import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/posts';

type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

export default function Home({ posts }: { posts: Post[] }) {
    return (
        <main>
            <h1>Static Blog</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.description}</p>
                        <small>{post.date}</small>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        },
    };
};
