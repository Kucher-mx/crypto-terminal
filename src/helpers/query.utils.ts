export const makeQuery = async (link: string) => {
  const res = fetch(link)
    .then((res) => res.json())
    .then((r) => r);

  return res;
};
