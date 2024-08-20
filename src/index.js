import { insertButton } from '@utils/insertButton';
import { capture } from '@utils/capture';
import { hotKey } from '@utils/hotKey';

function main() {
    setTimeout(insertButton, 2000);
    hotKey(capture, 'ControlLeft', 'KeyQ');
}

main();
