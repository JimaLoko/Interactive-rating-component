const ratingBtn = document.querySelectorAll('.js-rating-btn li a');
const activeRatingBtn = document.getElementsByClassName('btn-active');
const openModal = document.querySelector('.js-open-modal');
const container = document.querySelector('.js-container');
const modal = document.querySelector('.js-modal');


ratingBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        ratingBtn.forEach(item => {
            item.classList.remove('btn-active');
        } )
        btn.classList.add('btn-active');
    })
})

openModal.addEventListener('click', () => {
    if (activeRatingBtn.length == 0) {
        alert('Please select a review');
    }else {
        const result = activeRatingBtn[0].innerHTML;
        document.getElementById('js-number').innerHTML = result;
        container.classList.remove('active');
        modal.classList.add('active');
    }
})

