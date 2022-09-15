const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
const linkChar = document.querySelector('.card-details__link-characteristics');

const newArray = [...links, linkChar];
// seamless.polyfill();

newArray.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        // } else {
        //     console.log('nope');
        //     // seamless.scrollIntoView(document.querySelector("#characteristics"), {
        //     //     behavior: "smooth",
        //     //     block: "center",
        //     //     inline: "center",
        //     };
        }
    });
});

// const xar = document.querySelectorAll('.card-details__link-characteristics');

// xar.forEach((element) => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault();

//         const id = element.getAttribute('href').substring('#characteristics');
//         const section =document.querySelector(id);

//         if (section) {
//             section.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     })
// })
};

scrollFunc();