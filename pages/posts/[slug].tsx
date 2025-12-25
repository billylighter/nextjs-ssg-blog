import "@/app/globals.css";
import "@/styles/md-styles.css";
import {GetStaticPaths, GetStaticProps} from 'next';
import Image from "next/image";
import Link from "next/link";
import {getAllPosts, getPostBySlug} from '@/lib/posts';
import {remark} from 'remark';
import html from 'remark-html';
import Post from "@/types/Post";

export default function PostPage({title, content, date, readingTime, featuredImage, tags, author}: Post) {
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/">
                <button className="mt-8 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    <span className="text-xl">←</span>
                    Back to Home
                </button>
            </Link>
            <article className="md mdx">
                {featuredImage && (
                    <Image
                        src={featuredImage}
                        alt={title}
                        width={1200}
                        height={420}
                        className="my-0 max-h-[420px] object-cover"
                    />

                )}

                <div className="flex items-center gap-3 mb-2">
                    {author?.avatar && (
                        <Image
                            src={author.avatar}
                            alt={author.name}
                            width={32}
                            height={32}
                            className={"avatar rounded-full object-cover h-[32px] w-[32px]"}
                        />
                    )}

                    <span className="text-sm text-gray-500">
                                    {author?.name}
                                </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{dateFormatter.format(new Date(date))}</span>
                    {readingTime && <span>{readingTime} min read</span>}
                </div>

                {tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags?.map((tag) => (
                            <span key={tag}
                                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                        ))}
                    </div>
                )}

                <div dangerouslySetInnerHTML={{__html: content}}/>
            </article>
        </main>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => ({
            params: {slug: post.slug},
        })),
        fallback: false, // FULL SSG
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params?.slug as string;
    const {data, content} = getPostBySlug(slug);

    const processedContent = await remark()
        .use(html)
        .process(content);

    return {
        props: {
            title: data.title,
            content: processedContent.toString(),
            date: data.date,
            readingTime: data.readingTime,
            featuredImage: data.featuredImage,
            tags: data.tags ?? [],
            author: {
                name: data.author.name,
                avatar: data.author.avatar
            }
        },
    };
};

