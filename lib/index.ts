import { createHash } from "crypto";

export const getGravatarHash = (email: string): string => createHash("md5").update(email).digest("hex");

export const getGravatarUrl = (email: string): string => `https://www.gravatar.com/${getGravatarHash(email)}.json`;