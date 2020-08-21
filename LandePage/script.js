window.addEventListener('load', init);

function init() {
  console.log('JS CONNECTED!');

  const btnOne = document.querySelector('#btnOne');
  const btnTwo = document.querySelector('#btnTwo');
  const btnThree = document.querySelector('#btnThree');
  const btnFour = document.querySelector('#btnFour');
  const btnFive = document.querySelector('#btnFive');

  btnOne.addEventListener('click', () => handleAnwser('One'));
  btnTwo.addEventListener('click', () => handleAnwser('Two'));
  btnThree.addEventListener('click', () => handleAnwser('Three'));
  btnFour.addEventListener('click', () => handleAnwser('Four'));
  btnFive.addEventListener('click', () => handleAnwser('Five'));
}

const handleAnwser = (anwser) => {
  const answer = document.querySelector(`#answer${anwser}`);

  answer.classList.toggle('disabled');
};
