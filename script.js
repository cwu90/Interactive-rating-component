'strict';

const ratingButtons = document.querySelectorAll('.btn');
const submitButtons = document.getElementById('submit');
const selectedRating = document.querySelector('.selected');
const reviewCard = document.querySelector('.one');
const thankyouCard = document.querySelector('.two');

//Set a variable that is set to the rating clicked
let rating;

//When a ratingButton is clicked, change rating variable to that number
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
  e.preventDefault();

  selectedRating.innerText = `You selected ${rating} out of 5`;

  reviewCard.classList.add('hidden');
  thankyouCard.classList.remove('hidden');
});

//Submit number and reviewCard gets hidden

//thankyou card appears and select rating message HTML text change according to the rating number
