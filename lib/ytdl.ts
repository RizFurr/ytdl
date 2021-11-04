import ytdl, { chooseFormat, getBasicInfo } from "ytdl-core";
import { createWriteStream } from "fs";
import child from "./child";
// import internal from "stream";

export default (url: string, name: string, quality: string): Promise<string> =>
    new Promise<string>(async (resolve, reject) => {
        let song = ytdl(url, { filter: "audioonly", quality }).pipe(createWriteStream("temp/" + name + ".mp4"));
        song.on("finish", async () => {
            await child(`ffmpeg -y -i temp/${name}.mp4 -vn temp/${name}.mp3`);
            resolve(name);
        });
        song.on("error", (err) => {
            reject(new Error(err.message));
        });
    });
