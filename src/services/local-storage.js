export const clearLocalStorage = () => {
  const prostoSki = {
    cart: [],
  };
  localStorage.setItem("ProstoSki", JSON.stringify(prostoSki));
};

if (!localStorage.getItem("ProstoSki")) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem("ProstoSki"));
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem("ProstoSki"));
  localObject[name] = item;
  localStorage.setItem("ProstoSki", JSON.stringify(localObject));
};
