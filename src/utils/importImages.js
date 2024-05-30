export const importImage = (imageName) => {
  try {
    return require(`../assets/images/${imageName}.png`);
  } catch (err) {
    return null;
  }
};
