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
        let val = input.value;

        if (val) {

            if (val.length > 20) {
                val = val.slice(0, 20) + '...';
            }

            const elemContainer = document.createElement('div');
            elemContainer.classList.add('elemCont' ,'animate__animated', 'animate__slideInUp');
            wrapper.append(elemContainer);

            const elem = document.createElement('li');
            elem.classList.add('todo__item');
            elemContainer.append(elem);
            elem.textContent = val;

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

    const cloneElem = (sibl, btn, htmlCode, btnClass, block) => {
        let newSibl = sibl.cloneNode(true);

        btn.innerHTML = htmlCode;
        btn.classList.add(btnClass);

        newSibl.classList.add('cloneElem', 'animate__animated', 'animate__fadeIn');
        block.append(newSibl);
        block.append(btn);

        sibl.parentElement.remove();
    };

    wrapper.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn_ok')) {
            done.style.display = 'block';
            let sibl = e.target.previousElementSibling;

            // let newSibl = sibl.cloneNode(true);

            let btnRight = document.createElement('span');
            // btnRight.innerHTML = '&#10149;';
            // btnRight.classList.add('span-right');
            
            // // console.dir(newSibl);
            // newSibl.classList.add('cloneElem', 'animate__animated', 'animate__fadeIn');
            // done.append(newSibl);
            // done.append(btnRight);
            // sibl.parentElement.remove();

            cloneElem(sibl, btnRight, '&#10149;', 'span-right', done);
        }

        if (e.target && e.target.classList.contains('btn_del')) {
            trash.style.display = 'block';

            let sibl = e.target.previousElementSibling.previousElementSibling;
            // let newSibl = sibl.cloneNode(true);

            let btnDel = document.createElement('span');
            // btnDel.innerHTML = '&#10006;';
            // btnDel.classList.add('btn-del');

            // newSibl.classList.add('cloneElem', 'animate__animated', 'animate__fadeIn');
            // trash.append(newSibl);
            // trash.append(btnDel);

            // sibl.parentElement.remove();
            cloneElem(sibl, btnDel, '&#10006', 'btn-del', trash);
        }
    });


    done.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('span-right')) {
            
            let sibl = e.target.previousElementSibling;
            let newSibl = sibl.cloneNode(true);
            newSibl.classList.add('animate__animated', 'animate__fadeIn');
            newSibl.classList.remove('cloneElem');

            const elemContainer = document.createElement('div');
            elemContainer.classList.add('elemCont' ,'animate__animated', 'animate__slideInUp');
            wrapper.append(elemContainer);

            const btnOk = document.createElement('button');
            btnOk.classList.add('btn', 'btn_ok');
            btnOk.innerHTML = '&#10004;';

            const btnDel = document.createElement('button');
            btnDel.classList.add('btn', 'btn_del');
            btnDel.innerHTML = '&#10006;';

            elemContainer.append(newSibl, btnOk, btnDel);

            e.target.remove();
            sibl.remove();
        }
    });

    trash.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-del')) {
            let sibl = e.target.previousElementSibling;
            let newSibl = sibl.cloneNode(true);
            newSibl.classList.add('animate__animated', 'animate__fadeIn');

            const elemContainer = document.createElement('div');
            elemContainer.classList.add('elemCont' ,'animate__animated', 'animate__slideInUp');
            wrapper.append(elemContainer);

            const btnOk = document.createElement('button');
            btnOk.classList.add('btn', 'btn_ok');
            btnOk.innerHTML = '&#10004;';

            const btnDel = document.createElement('button');
            btnDel.classList.add('btn', 'btn_del');
            btnDel.innerHTML = '&#10006;';

            elemContainer.append(newSibl, btnOk, btnDel);

            e.target.remove();
            sibl.remove();
        }
    });
});