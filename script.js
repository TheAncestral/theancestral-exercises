function addListener() {
  const alertMe = () => {
    const sentence = document.querySelector('.js-input').value;
    alert(sentence);
  }

  document.querySelector('.js-button').addEventListener('click', alertMe);

  document.querySelector('.js-input').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      alertMe();
    }
  });
}
addListener();