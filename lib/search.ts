import search from "youtube-search";

export default async (query: string) => {
    return await search(query, {
        maxResults: 10,
        key: 'AIzaSyBFsST1u9M2slFAYOuyKVgEpylk3rgKuHw',
    });
};
