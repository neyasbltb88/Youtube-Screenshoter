import { insertButton } from '@utils/insertButton';
import { capture } from '@utils/capture';
import { hotKey } from '@utils/hotKey';

/** Селектор блока-контейнера на странице, куда будет вставлена(insertAdjacentElement('afterbegin')) кнопка создания скриншотов */
const containerSelector = '.ytp-right-controls';

function main() {
    let interval = setInterval(() => {
        const result = insertButton(containerSelector);
        // После успешной вставки кнопки останавливаем интервал
        if (result) clearInterval(interval);
    }, 100);

    hotKey(capture, 'ControlLeft', 'KeyQ');
}

main();
