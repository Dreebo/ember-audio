import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['volume-control'],
    hifi: service(),
    consts: service(),
    disabled: null,

    buttonIcon: computed('hifi.isMuted', function() {
        return this.get('hifi.isMuted') ? this.get('consts.materialIcon.mute') : this.get('consts.materialIcon.volumeUp');
    }),

    toggleMute() {
        this.get('hifi').toggleMute();
    }
});
