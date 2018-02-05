import Controller from '@ember/controller';

export default Controller.extend({
    isRecordedAudioExists: false,

    toggleRecord() {
        this.get('recorder.isRecording') ? this.stop() : this.record();
    },

    async downloadRecord() {
        const { audioURL, base64, blob } = await this.get('recorder').getAudio();

        //should be request to save record.
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
    }
});
