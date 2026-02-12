export const dateConvert = (date, format) => {
  if (!date) return;
  date = date.toString();
  const _year = date.slice(0, 4);
  const _month = date.slice(4, 6);
  const _day = date.slice(6, 8);
  if (format === "year") {
    return _year;
  }
  return `${_year}-${_month}-${_day}`;
};

// Content helpers
// ----------------
// Shared sort/filter utilities for article & portfolio lists.

export const sortByDateDesc = (items = []) => {
  return items
    .slice() // avoid mutating the original array
    .sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const filterByCategory = (items = [], category) => {
  if (!category) return items;
  return items.filter((item) => {
    if (!Array.isArray(item.category)) return false;
    return item.category.includes(category);
  });
};

export const getSortedItemsByCategory = (items = [], category) => {
  return filterByCategory(sortByDateDesc(items), category);
};
