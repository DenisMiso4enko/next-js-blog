// @ts-nocheck

export function paginateResults(page: number, limit: number, model: any) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalPages = Math.ceil(model.length / limit);

  const results = {};
  results.currentPage = Number(page);
  results.totalPosts = model.length;

  results.totalPages = totalPages;

  if (endIndex < model.length) {
    results.next = {
      page: Number(page) + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = model.slice(startIndex, endIndex);
  return results;
}
