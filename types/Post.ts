type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    featuredImage?: string;
    author?: {
        name: string;
        avatar?: string;
    };
    readingTime?: number;
    category?: string;
    tags?: string[];
};

export default Post;