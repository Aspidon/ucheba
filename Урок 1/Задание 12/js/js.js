"use strict";

window.addEventListener('DOMContentLoaded', function () {


    class TextCont {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        novDiv() {
            let a1 = document.createElement('div');
            a1.className = 'novText';
            document.body.append(a1);
            a1.textContent = 'Просто текст для проверки!';
            a1.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;

            console.log(a1.style.cssText );
        }
    }

    let novBlock = new TextCont('200px', '500px', 'red', '60pt', 'left');

    novBlock.novDiv();

    console.log(novBlock);

});