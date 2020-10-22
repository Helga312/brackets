module.exports = function check(str, bracketsConfig) {
    let openBrackets = [],
        closeBrackets = [],
        equalBrackets = [],
        chars = str.split(""),
        stack = [],
        openIndex,
        closeIndex,
        openBracket,
        closeBracket;

    if (str.length % 2 === 1) return false;

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < openBrackets.length; i++) {
        if (openBrackets[i] === closeBrackets[i]) {
            equalBrackets.push(openBrackets[i]);
        }
    }

    for (let i = 0; i <= chars.length - 1; i++) {
        openIndex = openBrackets.indexOf(chars[i]);
        if (openIndex !== -1) {
            openBracket = closeBrackets[openIndex];
            stack.push(openBracket);
            if (
                stack[stack.length - 1] === stack[stack.length - 2] &&
                openBrackets.includes(stack[stack.length - 1])) {
                stack.pop(); stack.pop();
            };
            continue;
        }
        closeIndex = closeBrackets.indexOf(chars[i]);
        if (closeIndex !== -1) {
            closeBracket = chars[i];
            openBracket = stack.pop();
            if (closeBracket !== openBracket) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}
