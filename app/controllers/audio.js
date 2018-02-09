import Controller from '@ember/controller';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Controller.extend({
    consts: service(),
    'api-request': service(),
    isRecordedAudioExists: false,

    toggleRecord() {
        this.get('recorder.isRecording') ? this.stop() : this.record();
    },

    async downloadRecord() {
        const { base64 } = await this.get('recorder').getAudio();
        const recordName = $('.record-name').val();

        //await this.get('api-request').saveSound({ name: recordName, url: base64 });
        this.addRecordToModel(recordName, base64);
    },

    async record() {
        const recorder = this.get('recorder');
        await recorder.record();
    },

    async getAudioBase64() {
        const recorder = this.get('recorder');
        const { base64 } = await recorder.getAudio();
        return base64;
    },

    async stop() {
        const recorder = this.get('recorder');
        recorder.stopRecording();
        recorder.close();
        this.set('isRecordedAudioExists', true);
    },

    addRecordToModel(name, url) {
        const newSound = {
            name,
            url,
            isPlaying: false,
            icon: this.get('consts.materialIcon.play')
        }
        this.get('model').pushObject(newSound);
    }
});
