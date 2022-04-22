const elSiteForm = document.querySelector('.js-shorten-form');
const elResultsList = document.querySelector('.js-results-list');
if(elSiteForm){
  elSiteForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    elResultsList.classList.add('results--open');
  });
}
if(elResultsList){
  elResultsList.addEventListener('click', function(evt){
    if(evt.target.matches('.js-results-button')){
      evt.target.textContent = 'Copied!';
      evt.target.classList.add('button--open');
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
    }
    setTimeout(function(){
      evt.target.classList.remove('button--open');
      evt.target.textContent = 'Copy';
    },1000)
  })
}
