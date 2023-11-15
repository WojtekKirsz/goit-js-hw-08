import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

form.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
