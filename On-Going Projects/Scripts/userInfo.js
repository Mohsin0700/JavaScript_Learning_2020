var myFunc = function () {
    var addrs = document.getElementById('addrs');
    var testName = document.getElementById('test');
    console.log(testName.value);
    if (testName.value === 'html') {
        addrs === null || addrs === void 0 ? void 0 : addrs.setAttribute('href', './html.html');
    }
    else if (testName.value === 'css') {
        addrs === null || addrs === void 0 ? void 0 : addrs.setAttribute('href', './css.html');
    }
    else if (testName.value === 'js') {
        addrs === null || addrs === void 0 ? void 0 : addrs.setAttribute('href', './js.html');
    }
};
