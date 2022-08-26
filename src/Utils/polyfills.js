export const capitalize = function (input) {
  if (!input.length) return;
  let words = input.split(" ");
  let CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return CapitalizedWords.join(" ");
};
