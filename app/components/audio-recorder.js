import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Component.extend({
    classNames: ['audio-recorder'],
    classNameBindings: [
        'isRecording:red-record-style'
    ],
    hifi: service(),
    consts: service(),
    isRecording: null,
    isRecordedAudioExists: false,
    recordName: '',

    buttonIcon: computed('isRecording', function () {
        return this.get('isRecording') ? this.get('consts.materialIcon.micOn') : this.get('consts.materialIcon.micOff');
    }),

    isPlayButtonDisabled: computed('isRecording', 'isRecordedAudioExists',function () {
        return this.get('isRecording') || !this.get('isRecordedAudioExists');
    }),

    isSaveButtonDisabled: computed('isPlayButtonDisabled', 'recordName', function () {
        return this.get('isPlayButtonDisabled') || isEmpty(this.get('recordName'));
    }),

    async play() {
        const audioUrl = await this.getAudioBase64();
        this.get('hifi').play(audioUrl);
    },

    clearNameRecord() {
        this.set('recordName', '');
    },

    downloadRecord () {}
});
