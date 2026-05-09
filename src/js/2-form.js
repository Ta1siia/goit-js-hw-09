const formData = {
  email: '',
  message: '',
};
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsed = JSON.parse(savedData);
  formData.email = parsed.email;
  formData.message = parsed.message;
  formEl.elements.email.value = parsed.email;
  formEl.elements.message.value = parsed.message;
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.clear();
  formData.email = '';
  formData.message = '';
  formEl.reset();
});
