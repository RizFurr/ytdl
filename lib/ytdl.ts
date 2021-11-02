import ytdl, { chooseFormat, getBasicInfo } from "ytdl-core";
import { createWriteStream } from "fs";
import child from "./child";

export default (url: string, name: string, highest: boolean): Promise<string> =>
    new Promise<string>(async (resolve, reject) => {
        let song = ytdl(url, { filter: "audio", quality: highest ? "highestaudio" : "lowestaudio" }).pipe(createWriteStream(`temp/${name}.mp4`));
        song.on("finish", async () => {
            await child(`ffmpeg -y -i temp/${name}.mp4 temp/${name}.mp3`);
            resolve(name);
        });
        song.on("error", (err) => {
            reject(new Error(err.message));
        });
    });
