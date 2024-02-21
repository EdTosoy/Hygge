export const postTitle = (str: string) =>
  str.split(/\s+/).slice(0, 10).join(" ");
