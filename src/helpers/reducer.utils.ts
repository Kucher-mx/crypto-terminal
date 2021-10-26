export const mergeCoins = (target: any, source: any, prop: string) => {
  const returnArr = [...target];
  source.forEach((sourceElement: any) => {
    let targetElement = returnArr.find((targetElement: any) => {
      return sourceElement[prop] === targetElement[prop];
    });
    targetElement
      ? Object.assign(targetElement, sourceElement)
      : returnArr.push(sourceElement);
  });
  return returnArr;
};
