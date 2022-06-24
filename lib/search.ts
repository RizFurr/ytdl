import search from "youtube-search";

export default async (query: string) => {
    return await search(query, {
        maxResults: 10,
        key: 'AIzaSyDMs4jRw5VGNOpYj7MYD3uB84_6xGuo7ao',
    });
};
