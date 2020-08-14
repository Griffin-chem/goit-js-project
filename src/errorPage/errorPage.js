import refs from '../dom/refs';
export default {
    showErrorPage(){
        refs.errorPage.classList.remove('is-hidden');
        refs.mainPage.classList.add('is-hidden');
        refs.mainLibrary.classList.add('is-hidden');
        refs.mainDetailsPage.classList.add('is-hidden');
        
    },
    hiddenErrorPage(){
        refs.errorPage.classList.add('is-hidden');
    },
}