if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW Registrated!');
        console.log(registration);
    }).catch(error => {
        console.log('SW Failed!');
        console.log(error);
    });
}