import { Stack } from './stack';

export class BalancingString {

    constructor() {
    }

    public isBalancedString(customString): boolean {
        const splittedString = customString.split('');
        const stack = new Stack();
        splittedString.forEach(ele => {
            if (ele === '(' || ele === '{' || ele === '[' || ele === '<') {
                stack.push(ele);
            }
            else if (ele === ')' || ele === '}' || ele === ']' || ele === '>') {
                if (stack.isEmpty()) {
                    return false;
                }
                else {
                    const top = stack.pop();
                    return (ele === this.getClosingTag(top));
                }
            }
        });
        return true;
    }

    public getClosingTag(tag) {
        if (tag === '(') {
            return ')'
        }
        else if (tag === '[') {
            return ']'
        }
        else if (tag === '{') {
            return '}'
        }
        else if (tag === '<') {
            return '>'
        }
    }
}
