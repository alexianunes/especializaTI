const start = () => {
    console.log('start');

    second();

    console.log('end');
}

const second = () => {
    setTimeout(() => {
        console.log('second');
    }, 2000);
}