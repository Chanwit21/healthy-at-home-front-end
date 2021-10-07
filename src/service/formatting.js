export const firstUpperCase = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};

export const formatText = (text) => {
  let result = '';
  for (let srt of text) {
    if (srt === srt.toUpperCase()) {
      result += ` ${srt.toLowerCase()}`;
    } else {
      result += srt;
    }
  }
  return result[0].toUpperCase() + result.slice(1);
};
