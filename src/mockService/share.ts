
const LS_LIST = "LIST";

export function shareLink(url: string) {
  const currentList: string[] = JSON.parse(
    localStorage.getItem(LS_LIST) || "[]"
  );
  currentList.push(url);

  localStorage.setItem(LS_LIST, JSON.stringify(currentList));
}

export function getList() {
  const currentList: string[] = JSON.parse(
    localStorage.getItem(LS_LIST) || "[]"
  );
  return currentList;
}
