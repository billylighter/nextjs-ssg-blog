import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/posts';
import "@/app/globals.css";
import dateFormatter from "@/utils/dateFormatter";
import Post from "@/types/Post";

export default function Home({ posts }: { posts: Post[] }) {

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <h1 className="text-4xl font-bold mb-8 text-gray-900">Static Blog</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (

                    <Link key={post.slug}
                        href={"/posts/" + post.slug}
                        className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                        <div className="relative w-full h-48 bg-gray-100">
                            <Image
                                src={post.featuredImage || "/placeholder.jpeg"}
                                alt={post.title}
                                fill
                                priority={true}
                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                {post.author?.avatar && (
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        width={32}
                                        height={32}
                                        className={"avatar rounded-full object-fill h-[32px] w-[32px]"}
                                    />
                                )}

                                <span className="text-sm text-gray-500">
                                    {post.author?.name}
                                </span>
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                            <p className="text-gray-700 mb-4">{post.description}</p>

                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>{dateFormatter.format(new Date(post.date))}</span>

                                {post.readingTime && <span>{post.readingTime} min read</span>}
                            </div>

                            {post.tags && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span key={tag}
                                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts();
    return {
        props: { posts },
    };
};
