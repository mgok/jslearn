function decomposeUrl(url) {
    let urlWithoutArguments = url.substr(0, url.indexOf('\\?') !== -1 ? url.indexOf('\\?') : url.length);
    let folderTree = urlWithoutArguments.substr(0, urlWithoutArguments.lastIndexOf('/')).split('/').filter((value, index) => index > 2)
    let targetFile = urlWithoutArguments.substr(urlWithoutArguments.lastIndexOf('/') + 1);
    let argumentsFile = url.indexOf('\\?') !== -1 ? url.substr(url.indexOf('\\?')) : null;

    let domain = urlWithoutArguments.split('/')[2];
    const ipRegEx = "^(\\d|[1-9]\\d|1\\d\\d|2([0-4]\\d|5[0-5]))\\.(\\d|[1-9]\\d|1\\d\\d|2([0-4]\\d|5[0-5]))\\.(\\d|[1-9]\\d|1\\d\\d|2([0-4]\\d|5[0-5]))\\.(\\d|[1-9]\\d|1\\d\\d|2([0-4]\\d|5[0-5]))$";
    let subDomain = null;
    let domainName = null;
    let ipAddress = null;
    if (domain.search(ipRegEx) === -1) {
        subDomain = domain.substr(0, domain.indexOf('.'));
        domainName = domain.substr(domain.indexOf('.') + 1);
    } else {
        ipAddress = domain;
    }

    return {
        protocol: url.substr(0, url.indexOf(":")),
        targetFile: targetFile ? targetFile : null,
        argumentsFile: argumentsFile ? argumentsFile : null,
        folderTree: folderTree && folderTree.length ? folderTree : null,
        subDomain: subDomain,
        domainName: domainName,
        ipAddress: ipAddress
    }
}

console.log(decomposeUrl('https://www.google.com/search/test.js?ok=1'));
console.log(decomposeUrl('http://10.100.1.11/search/test.js?ok=1'));
console.log(decomposeUrl('https://10.100.1.11/search/test/test.js'));
console.log(decomposeUrl('https://www.google.com/search/'));