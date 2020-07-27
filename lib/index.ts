import { createHash } from "crypto";

export const getGravatarHash = (email: string): string => createHash("md5").update(email).digest("hex");

export const getGravatarUrl = (email: string): string => `https://www.gravatar.com/${getGravatarHash(email)}.json`;

export interface gravatarAvatarOptions {
    size?: number;
}

export const getGravatarAvatar = (email: string, { size }: gravatarAvatarOptions = {}): string => `https://secure.gravatar.com/avatar/${getGravatarHash(email)}?${size ? `s=${size}` : ""}`;
