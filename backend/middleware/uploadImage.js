import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const uploadImage = async (coverImage) => {
  const { createReadStream, filename } = await coverImage;
  const stream = createReadStream();
  const ext = path.extname(filename);
  const id = uuidv4();
  const filePath = path.join(
    import.meta.url.replace("file://", ""),
    "..",
    "public",
    "images",
    `${id}${ext}`
  );
  const url = `http://localhost:4000/images/${id}${ext}`;
  await new Promise((resolve, reject) =>
    stream
      .on("error", (error) => {
        fs.unlinkSync(filePath);
        reject(error);
      })
      .pipe(fs.createWriteStream(filePath))
      .on("error", (error) => reject(error))
      .on("finish", () => resolve())
  );
  return url;
};
