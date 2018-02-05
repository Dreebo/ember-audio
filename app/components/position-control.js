import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Component.extend({
    classNames: ['position-control'],
    hifi: service(),
    consts: service(),

    buttonIcon: computed('hifi.isPlaying', function() {
        return this.get('hifi.isPlaying') ? this.get('consts.materialIcon.pause') : this.get('consts.materialIcon.play');
    }),

    tooglePause() {
        if (this.get('hifi.position')) {
            this.get('hifi').togglePause();
        }
    },

    rewind() {
        this.get('hifi').rewind(5000);
    },

    fastForward() {
        this.get('hifi').fastForward(5000);
    }
});
