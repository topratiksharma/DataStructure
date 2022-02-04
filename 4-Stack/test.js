function isBalancedString(customString) {
    const splittedString = customString.split('');
    const stack = [];
    let isBalanced = 1;
    splittedString.forEach;(ele => {
        if (ele === '(' || ele === '{' || ele === '[') {
            stack.unshift(ele);
        }
        else if (ele === ')' || ele === '}' || ele === ']') {
            if (stack.length === 0) {
                isBalanced = 0;
                return false;
            }
            else {
                const top = stack.shift();
                isBalanced = (ele === getClosingTag(top)) ? 1 : 0;
                if (!isBalanced) return false;
                else return true;
            }
        }
    });
    return isBalanced;
}

function getClosingTag(tag) {
    if (tag === '(') {
        return ')'
    }
    else if (tag === '[') {
        return ']'
    }
    else if (tag === '{') {
        return '}'
    }
}


console.log(isBalancedString(`"/* HelloWorld.java"," */",
"public class HelloWorld {",
"{",
"	public static void main(String[] args) {",
"		System.out.println("Hello World!");",
"	}",
"}"`))