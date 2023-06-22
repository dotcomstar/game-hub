import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id); // What if p.id is undefined and so is id?
};

export default usePlatform;
