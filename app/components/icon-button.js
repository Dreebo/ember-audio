import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['icon-button'],
    hifi: service(),
    cssClass: null,
    disabled: null,
    buttonIcon: null,
    title: null,

    onClick() {}
});
