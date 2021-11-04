import ytdl, { chooseFormat, getBasicInfo } from "ytdl-core";
import { createWriteStream } from "fs";
import child from "./child";
import internal from "stream";

export default (url: string, name: string, highest: boolean): Promise<internal.Readable> =>
    new Promise<internal.Readable>(async (resolve, reject) => {
        let song = ytdl(url, { filter: "audioonly", quality: highest ? "highestaudio" : "lowestaudio" });
        // song.on("finish", async () => {
        //     await child(`ffmpeg -y -i temp/${name}.mp4 temp/${name}.mp3`);
        //     resolve(name);
        // });
        // song.on("error", (err) => {
        //     reject(new Error(err.message));
        // });

        return song;
    });
