import fs from 'fs/promises';
import path from 'path';
import type {EntryGenerator} from "./$types";

export const entries: EntryGenerator = async () => {
  // Resolve the root post directory
  const postsPath = path.resolve('src/routes/post');
  // Read the files in the directory
  const files = await fs.readdir(postsPath);

  // Map the files array into the EntryGenerator format and return it
  return files
    .filter(file => file.endsWith('.svx'))
    .map((file) => {
      const fileName = file.replace(/\.svx$/, '');
      return { slug: fileName };
    });
}
