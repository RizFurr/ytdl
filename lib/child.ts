import { exec } from "child_process";

export default (command: string): Promise<any> =>
    new Promise((resolve, reject) => {
        const state = exec(command);

        state.on("error", reject);
        state.on("close", resolve);
    });
