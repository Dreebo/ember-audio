import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    recorder: service(),
    i18n: service(),

    init() {
        this._super(...arguments);
        
		const recorder = this.get('recorder');
		recorder.set('recordingTime', 50000000);
    },
    
    setupController(controller) {
		this._super(...arguments);
		const recorder = this.get('recorder');
		controller.set('recorder', recorder);
	},

    model() {
        return [{
            name: 'camila-cabello-feat-young-thug_-_havana',
            url: 'assets/camila-cabello-feat-young-thug_-_havana.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'eldzhey_-_minimal',
            url: 'assets/eldzhey_-_minimal.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'gazirovka_-_black',
            url: 'assets/gazirovka_-_black.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'griby_-_taet-led',
            url: 'assets/griby_-_taet-led.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'jah-khalib_-_leyla',
            url: 'assets/jah-khalib_-_leyla.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'loboda_-_paren (1)',
            url: 'assets/loboda_-_paren (1).mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'loboda_-_tvoi-glaza',
            url: 'assets/loboda_-_tvoi-glaza.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'luis-fonsi_-_despacito',
            url: 'assets/luis-fonsi_-_despacito.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'maks-korzh_-_gory-po-koleno',
            url: 'assets/maks-korzh_-_gory-po-koleno.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'maks-korzh_-_malinovyy-zakat',
            url: 'assets/maks-korzh_-_malinovyy-zakat.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'natalya-mogilevskaya_-_ya-tancevala',
            url: 'assets/natalya-mogilevskaya_-_ya-tancevala.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'post-malone_-_rockstar',
            url: 'assets/post-malone_-_rockstar.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }, {
            name: 'loboda_-_paren',
            url: 'assets/loboda_-_paren.mp3',
            isPlaying: false,
            icon: 'play_circle_outline'
        }];
    }
});
