const { stdin, stdout } = process;

export function input(question?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    stdin.resume();
    if (typeof question !== "undefined") {
      stdout.write(question + "\n");
    }

    stdin.on("data", (data) => {
      resolve(data.toString().trim());
    });
    stdin.on("error", (err) => reject(err));
  });
}
