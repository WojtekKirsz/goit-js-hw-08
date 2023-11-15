// const form = document.querySelector('.feedback-form');

// const localStorageKey = 'message';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', event => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// // Importowanie funkcji throttle z lodash
// import throttle from 'lodash/throttle';

// // Funkcja do aktualizacji pól formularza na podstawie danych z local storage
// const updateFormFieldsFromStorage = () => {
//   const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (savedState) {
//     form.elements.email.value = savedState.email || '';
//     form.elements.message.value = savedState.message || '';
//   } else {
//     form.reset();
//   }
// };

// // Funkcja throttle do zapisywania danych z formularza do local storage
// const updateLocalStorageThrottled = throttle(() => {
//   const currentState = {
//     email: form.elements.email.value,
//     message: form.elements.message.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
// }, 500); // Opóźnienie zapisu na 500 milisekund

// // Zdarzenie input na polach formularza - wywołuje zapis do local storage
// form.addEventListener('input', () => {
//   updateLocalStorageThrottled();
// });

// // Po załadowaniu strony - aktualizacja pól formularza z local storage
// updateFormFieldsFromStorage();

// // Zdarzenie submit formularza - czyszczenie local storage i reset pola
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const currentState = {
//     email: form.elements.email.value,
//     message: form.elements.message.value,
//   };
//   console.log('Submitted form state:', currentState);
//   localStorage.removeItem('feedback-form-state');
//   form.reset();
// });

// ///

// Import lodash throttle
import throttle from 'lodash.throttle';

// Select the form
const form = document.querySelector('.feedback-form');

// Get the current state from local storage
const savedFormData = localStorage.getItem('feedback-form-state');

// If there is any saved data, use it to fill out the form
if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

// Save the state of the form in local storage
form.addEventListener(
  'input',
  throttle(e => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

// Clear the storage and the form fields on submit, log the form data
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
