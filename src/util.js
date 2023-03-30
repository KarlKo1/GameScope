export const smallImage = (imageUrl, size) => {
  //TODO: Fix temporary null images
  return imageUrl?.match(/media\/(screenshots|games)/)
    ? imageUrl.replace("/media/", `/media/resize/${size}/-/`)
    : imageUrl;
};
