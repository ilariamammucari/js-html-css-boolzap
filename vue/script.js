var app = new Vue({
    el: '#root',
    data: {
        utenti: [
            {
                nome: 'Michele',
                avatar: 'img/avatar_1.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao,come stai?',
                        stato: 'ricevuto'
                    },
                    {
                        data: moment().format('llll'),
                        testo: 'Tutto bene! E tu?',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Antonio',
                avatar: 'img/avatar_4.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Tommaso',
                avatar: 'img/avatar_5.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao,Come stai?',
                        stato: 'ricevuto'
                    }
                ]
            },

            {
                nome: 'Viviana',
                avatar: 'img/avatar_6.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Luca',
                avatar: 'img/avatar_7.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao,come stai?',
                        stato: 'inviato'
                    }
                ]
            },

            {
                nome: 'Matteo',
                avatar: 'img/avatar_8.jpg',
                messaggio: [
                    {
                        data: moment().format('llll'),
                        testo: 'Ciao',
                        stato: 'inviato'
                    }
                ]
            }
        ],
        contatoreUtente: 0,
        testoInput: ''
    },
    methods: {
        chatDinamica(index){
            this.contatoreUtente = index;
        },
        inserimentoInput(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: this.testoInput, data: moment().format('llll'), stato: 'inviato'} );
            this.testoInput = '';
            setTimeout(this.funzioneRisposta,1000);
        },
        funzioneRisposta(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: 'ok', data: moment().format('llll'), stato: 'ricevuto'} );
        }
    }
});