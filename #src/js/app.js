import { acc } from './modules/acc.js';
import * as flsFuncs from './modules/functions.js';
import { tabs } from './modules/tabs.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    tabs('.seo-port', '.seo-port__tabs', '.seo-port__tabs_item', '.seo-port__item');
    tabs('.seo-ccl', '.seo-ccl__body_tabs', '.seo-ccl__body_tabs_item', '.seo-ccl__body_list');
    tabs('.context-pro', '.context-pro__tabs', '.context-pro__tabs_item', '.context-pro__body_item');
    acc();
})