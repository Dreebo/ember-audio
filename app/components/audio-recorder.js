import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['audio-recorder'],
    classNameBindings: [
        'isRecording:red-record-style',
        'isPlayAndSaveButtonDisabled:disabled-save-and-play-buttons'
    ],
    hifi: service(),
    consts: service(),
    isRecording: null,
    isRecordedAudioExists: false,

    buttonIcon: computed('isRecording', function () {
        return this.get('isRecording') ? this.get('consts.materialIcon.micOn') : this.get('consts.materialIcon.micOff');
    }),

    isPlayAndSaveButtonDisabled: computed('isRecording', 'isRecordedAudioExists',function () {
        return this.get('isRecording') || !this.get('isRecordedAudioExists');
    }),

    async play() {
        const audioUrl = await this.getAudioBase64();
        this.get('hifi').play(audioUrl);
    },

    downloadRecord () {}
});
