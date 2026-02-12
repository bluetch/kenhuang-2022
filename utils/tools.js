export const clsx = (conditionals, others) => {
  return [
    others,
    Object.keys(conditionals)
      .filter((key) => conditionals[key])
      .join(" "),
  ].join(" ");
};

export const termsMapping = (key, data) => {
  if (!key) return;
  let result;
  data.map((item) => {
    let _letter = item.name_eng.toLowerCase().replace(/ /g, "-");
    if (key === _letter) {
      return (result = item);
    }
    return false;
  });
  return result || key;
};

export const codeMapping = ({ key, data, field = "name" }) => {
  if (!key) return;
  if (!data) return;
  let result;
  data.map((item) => {
    if (key === item.code || key === item.slackId || key === item.id) {
      switch (field) {
        case "name":
          return (result = item.name);
        case "all":
          return (result = item);
        case "location":
          return (result = item.location);
        default:
          return (result = item.name);
      }
    }
    return false;
  });
  return result || key;
};

export const dateConvert = (date, format) => {
  if (!date) return;
  let result;
  date = date.toString();
  const _year = date.slice(0, 4);
  const _month = date.slice(4, 6);
  const _day = date.slice(6, 8);
  if (format == "year") {
    return _year;
  } else {
    return `${_year}-${_month}-${_day}`;
  }

};
