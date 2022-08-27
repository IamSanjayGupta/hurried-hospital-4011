export const capitalize = function (input) {
  if (!input.length) return;
  let words = input.split(" ");
  let CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return CapitalizedWords.join(" ");
};

export const getJobBullets = (str) => {
  let text = str.slice(str.indexOf("<ul>") + 4, str.indexOf("</ul>"));
  text = text.split("<li>");
  text = text.join("");
  text = text.split("</li>");
  return text.length > 4 ? text.splice(0, 4) : text.splice(0, text.length - 1);
};
