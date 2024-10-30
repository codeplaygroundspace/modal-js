'use_strict';

//Select all elements
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

// Function to toggle
const toggleModal = function () {
  modal.classList.toggle('hidden');
  modalOverlay.classList.toggle('hidden');
};

// Open with buttons
openModalButtons.forEach(button => {
  button.addEventListener('click', toggleModal);
});

// Close with X button
closeModalButton.addEventListener('click', toggleModal);

// Close with overlay click (desktop)
modalOverlay.addEventListener('click', toggleModal);

// Close with overlay touch (mobile)
modalOverlay.addEventListener('touchend', toggleModal);

// Close with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});
