const elSiteForm = document.querySelector('.js-shorten-form');
const elResultsList = document.querySelector('.js-results-list');
elSiteForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  elResultsList.classList.add('results--open');
});
