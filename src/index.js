module.exports = function check(str, bracketsConfig) {
    const config_arr = bracketsConfig.map(item => item.join(''));
    let string = str, tmp;

    do {
        tmp = string;
        config_arr.forEach(item => string = string.replace(item, ''));
    } while (string.length < tmp.length)

    return !string.length;
}
