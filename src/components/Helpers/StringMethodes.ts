const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

export function removePunctuation(str: string) {
  let rez = str.replace(regex, "");
  rez = rez.replace(/\s+/g, " ").trim();
  return rez;
}

export function removeUmlauts(str: string) {
  return str.replace(/[ä]/g, "a").replace(/[ü]/g, "u").replace(/[ö]/g, "o");
}
