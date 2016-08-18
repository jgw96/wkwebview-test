var count = 0;

document.querySelector('#counter').innerHTML = count;
window.addEventListener('scroll', function () {
    console.log('scrolling')
    count += 1;
    document.querySelector('#counter').innerHTML = count;
});
