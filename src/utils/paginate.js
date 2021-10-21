import lodash from 'lodash';

const pagination = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return lodash(items).slice(startIndex).take(pageSize).value();
};

export default pagination;
