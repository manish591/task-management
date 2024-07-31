import crypto from "crypto";

export function generateRandonString(length: number) {
  const bytes = crypto.randomBytes(length);
  return bytes.toString("base64").replaceAll("/", "-");
}