'strict';

const ratingButtons = document.querySelectorAll('.btn');
const submitButtons = document.getElementById('submit');
const selectedRating = document.querySelector('.selected');
const reviewCard = document.querySelector('.one');
const thankyouCard = document.querySelector('.two');


(function () {
  let rating;
  ratingButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      const clickedRating = e.target;
      rating = e.target.id;

      ratingButtons.forEach(button => {
        button.classList.remove('select');
      });
      clickedRating.classList.toggle('select');
    });
  });

  submitButtons.addEventListener('click', function (e) {
    //If no rating, return false
    if (!rating) {
      return false;
    } else {
      e.preventDefault();

      selectedRating.innerText = `You selected ${rating} out of 5`;

      reviewCard.classList.add('hidden');
      thankyouCard.classList.remove('hidden');
    }
  });
})();


