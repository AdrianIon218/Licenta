const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

export function removePunctuation(str:string) {
    let rez = str.replace(regex, '');
    rez = rez.replace(/\s+/g, ' ').trim();
    return rez;
} 