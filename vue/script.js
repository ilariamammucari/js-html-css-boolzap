var app = new Vue({
    el: '#root',
    data: {
        utenti: [
            {
                nome: 'Michele',
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
                visibile: true,
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
        testoInput: '',
        dark: false,
        valoreInput: '',
        nomi: ''
    },
    created(){
        this.ricerca()
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
        },
        darkMode(){
            ( this.dark ) ? this.dark = false : this.dark = true;
        },
        ricerca(){

            this.utenti.filter((element) => {
                this.nomi = element.nome;
                ( this.nomi.indexOf(this.valoreInput.toUpperCase()) > -1 ) ? this.visibile = false : this.visibile = true;
                console.log(element.nome.indexOf(this.valoreInput.toUpperCase()));
                console.log(this.nomi);
                console.log(this.utenti[this.contatoreUtente].visibile);
            });
        }
    }
});