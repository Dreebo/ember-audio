import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
    allowMP3AndWAVFormatRegexp: '.(?:wav|mp3)$',

    materialIcon: computed(function () {
        return {
            play: 'play_circle_outline',
            pause: 'pause_circle_outline',
            download: 'file_download',
            volumeUp: 'volume_up',
            mute: 'volume_mute',
            micOn: 'mic',
            micOff: 'mic_none',
            forward_5: 'forward_5',
            replay_5: 'replay_5'
        };
    })
});