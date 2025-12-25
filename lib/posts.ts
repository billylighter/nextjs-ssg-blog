import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
    const files = fs.readdirSync(postsDirectory);

    return files.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data } = matter(fileContents);

        return {
            slug,
            ...(data as {
                title: string;
                date: string;
                description: string;
            }),
        };
    });
}

export function getPostBySlug(slug: string) {
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

    const fullPath = fs.existsSync(mdPath) ? mdPath : mdxPath;
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return matter(fileContents);
}
