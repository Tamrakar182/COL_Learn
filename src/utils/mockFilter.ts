import { mockFilterResults } from '@/mock/data';

export const filterResults = (selectedFilters: { [key: string]: string[] }, search: string) => {
  const results = mockFilterResults;
  return results.filter(result => {
    // Filter by type
    if (selectedFilters.type && selectedFilters.type.length > 0) {
      if (!selectedFilters.type.includes(result.type)) {
        return false;
      }
    }

    // Filter by difficulty
    if (selectedFilters.difficulty && selectedFilters.difficulty.length > 0) {
      if (!selectedFilters.difficulty.includes(result.difficulty)) {
        return false;
      }
    }

    // Filter by category
    if (selectedFilters.category && selectedFilters.category.length > 0) {
      if (
        !result.categories.some(category =>
          selectedFilters.category.includes(category),
        )
      ) {
        return false;
      }
    }

    // Filter by Search
    if (search && search.length > 0) {
      if (!result.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
};
