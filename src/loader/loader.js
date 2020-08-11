import refs from '../dom/refs';
export default {
    showLoder(){
        refs.spinner.classList.remove('is-hidden');
        
    },
    hiddenLoader(){
        refs.spinner.classList.add('is-hidden');
    },
}