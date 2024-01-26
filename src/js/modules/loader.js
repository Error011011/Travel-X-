function loader () {
    const loader = document.querySelector('#loader');

    setTimeout( () => {
        loader.classList.add('loader-wrapper--hidden');
    }, 1000)
 
}


export default loader;