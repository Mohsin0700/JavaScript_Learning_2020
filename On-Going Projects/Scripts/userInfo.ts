const myFunc = ():void => {
    const addrs = document.getElementById('addrs');
    const testName = document.getElementById('test') ! as HTMLInputElement;
    console.log(testName.value);
    if (testName.value === 'html') {
        addrs?.setAttribute('href','./html.html');
        
    } else if (testName.value === 'css') {
        addrs?.setAttribute('href','./css.html');        
    } else if (testName.value === 'js') {
        addrs?.setAttribute('href','./js.html');        
    }
}