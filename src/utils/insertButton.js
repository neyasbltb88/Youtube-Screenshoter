import { capture } from './capture.js';

export const insertButton = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return false;

    const captureButton = document.createElement('div');
    captureButton.setAttribute('class', 'ytp-button');
    captureButton.setAttribute('style', 'font-size: 1.6em; text-align: center;');
    const textnode = document.createTextNode('📷');
    captureButton.appendChild(textnode);

    container.insertAdjacentElement('afterbegin', captureButton);
    captureButton.addEventListener('click', capture);

    return true;
};
