import { capture } from './capture.js';

export const insertButton = () => {
    const controls = document.querySelector('.ytp-right-controls');
    const captureButton = document.createElement('div');

    captureButton.setAttribute('class', 'ytp-button');
    captureButton.setAttribute('style', 'font-size: 1.6em; text-align: center;');
    const textnode = document.createTextNode('📷');
    captureButton.appendChild(textnode);

    controls.insertAdjacentElement('afterbegin', captureButton);
    captureButton.addEventListener('click', capture);
};
