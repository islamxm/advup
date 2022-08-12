import Accordion from 'accordion-js';

export const acc = () => {
    const el = document.querySelector('.seo-acc__body_acc');

    if(el) {
        const acc = new Accordion(el, {
            panelClass: 'seo-acc__body_acc_item_body',
            elementClass: 'seo-acc__body_acc_item',
            triggerClass: 'seo-acc__body_acc_item_head_trigger',
    
        });
    }
    
}