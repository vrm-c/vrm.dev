import fetchMeta from "fetch-meta-tags";
import process from "node:process";

import type { UserInfo } from "./user.d.ts";
import { users } from "./users";

async function updateInfo(info: UserInfo) {
  if (info.preview) {
    return;
  }
  const meta = await fetchMeta(info.url);
  console.error(meta);
  if (meta.image) {
    info.preview = meta.image;
  }
  if (!info.description && meta.description) {
    info.description = meta.description;
  }
}

async function main() {
  for (let i = 0; i < users.length; ++i) {
    const user = users[i];
    try {
      await updateInfo(user.ja);
    } catch (err) {
      console.error(user.ja.url, err);
    }

    try {
      await updateInfo(user.en);
    } catch (err) {
      console.error(user.en.url, err);
    }
  }
}

main().then(() => {
  process.stdout.write(`import type { User } from "./user.d.ts";

// Add sites to this list
// prettier-ignore
export const users: User[] = ${JSON.stringify(users, null, 2)};\n`);
});
