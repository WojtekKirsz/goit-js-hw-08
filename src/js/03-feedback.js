const form = document.querySelector('.feedback-form');

const localStorageKey = 'message';

form.elements.message.value = localStorageKey.getItem(localStorageKey) ?? '';

form.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
