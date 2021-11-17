function loadFromStorage(key: string) {
  return localStorage.getItem(key);
}

function saveToStorage(key: string, val: string) {
  if (!localStorage.getItem(key)) {
    localStorage[key] = JSON.stringify([]);
  }
  let searches: string[] = JSON.parse(localStorage.getItem(key) as string);
  searches.push(val);
  localStorage.setItem(key, JSON.stringify(searches));
}

export const localStorageService = {
  loadFromStorage,
  saveToStorage,
};
