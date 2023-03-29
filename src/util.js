export const smallImage = (imageUrl, size) => {
  return imageUrl.match(/media\/(screenshots|games)/)
    ? imageUrl.replace("/media/", `/media/resize/${size}/-/`)
    : imageUrl;
};
