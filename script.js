'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input'),
          btn = document.querySelector('.btn'),
          done = document.querySelector('.done'),
          trash = document.querySelector('.trash'),
          wrapper = document.querySelector('.todo__items');

    const clearInput = () => {
        input.value = '';
    };

    const createList = () => {
        const elemContainer = document.createElement('div');
        elemContainer.classList.add('elemCont' ,'animate__animated', 'animate__fadeIn');
        wrapper.append(elemContainer);

        const elem = document.createElement('li');
        elem.classList.add('todo__item');

        let val = input.value;

        if (val) {

            if (val.length > 23) {
                val = val.slice(0, 20) + '...';
            }
            elem.textContent = val;
            elemContainer.append(elem);

            const btnOk = document.createElement('button');
            btnOk.classList.add('btn', 'btn_ok');
            btnOk.innerHTML = '&#10004;';

            const btnDel = document.createElement('button');
            btnDel.classList.add('btn', 'btn_del');
            btnDel.innerHTML = '&#10006;';

            elemContainer.append(btnOk, btnDel);
            
        } 

    };

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        createList();

        clearInput();
    });

    document.querySelectorAll('.btn_ok').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e);
        });
    });


    wrapper.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn_ok')) {
            done.style.display = 'block';

            let sibl = e.target.previousElementSibling; //

            let newSibl = sibl.cloneNode(); 
            newSibl.append(sibl.textContent);
            // console.dir(newSibl);
            newSibl.classList.add('cloneElem', 'animate__animated', 'animate__fadeIn');
            done.append(newSibl);

            document.querySelector('.elemCont').remove();
        }

        if (e.target && e.target.classList.contains('btn_del')) {
            trash.style.display = 'block';

            let sibl = e.target.previousElementSibling.previousElementSibling;
            let newSibl = sibl.cloneNode();
            newSibl.append(sibl.textContent);

            newSibl.classList.add('cloneElem', 'animate__animated', 'animate__fadeIn');
            trash.append(newSibl);

            document.querySelector('.elemCont').remove();
        }
    });
});