export default function useSlugger() {
  const slugger = (inputText: string) => {
    return inputText
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-'); // Replace multiple - with single -
  };

  return {
    slugger,
  };
}
