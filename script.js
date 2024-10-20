window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.elfsight-app-5ab5307e-fb2c-4eba-8caa-54bfae9d00d3');
    const button = document.querySelector('.button');
    localStorage.getItem('showForm') === 'true' ? form.style.display = 'block' : form.style.display = 'none';
    button.addEventListener('click', () => {
        if (form.style.display === 'none') {
            form.style.display='block';
            button.textContent = 'Скрыть виджет';
            localStorage.setItem('showForm', 'true');
        } else {
            form.style.display='none';
            button.textContent = 'Показать виджет';
            localStorage.setItem('showForm', 'false');
        }
    }) 
});