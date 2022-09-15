const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const cardDetailsTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const modalClose = modal.querySelector('.modal__close');
    const modalForm = modal.querySelector('form');

    
    btnOpenModal.addEventListener('click', () => {
        modal.style.display ='flex';
        modalTitle.textContent = cardDetailsTitle.textContent;
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const labels = modal.querySelectorAll('.modal__label');

        const sendMessage = {}
        
        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');
            
            console.log(span.textContent);
            console.log(input.value);
            sendMessage[span.textContent] = input.value;
        })
    })
};

sendForm();