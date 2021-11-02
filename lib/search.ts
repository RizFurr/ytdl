import search from "youtube-search";

export default async (query: string) => {
    return await search(query, {
        maxResults: 10,
        key: process.env.YOUTUBE_API,
    });
};
