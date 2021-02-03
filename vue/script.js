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
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'ricevuto',
                        elimina: 'Elimina'
                    },
                    {
                        data: moment().format('llll'),
                        testo: 'Tutto bene! E tu?',
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'ricevuto',
                        elimina: 'Elimina'
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
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'inviato',
                        elimina: 'Elimina'
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
                        stato: 'inviato',
                        elimina: 'Elimina',
                    }
                ]
            }
        ],
        contatoreUtente: 0,
        testoInput: '',
        dark: false,
        valoreInput: '',
        nomi: '',
        menu: 'hidden'
    },
    methods: {
        chatDinamica(index){
            this.contatoreUtente = index;
        },
        inserimentoInput(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: this.testoInput, data: moment().format('llll'), stato: 'inviato', elimina: 'Elimina'} );
            this.testoInput = '';
            setTimeout(this.funzioneRisposta,1000);
        },
        funzioneRisposta(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: 'ok', data: moment().format('llll'), stato: 'ricevuto', elimina: 'Elimina'} );
        },
        darkMode(){
            ( this.dark ) ? this.dark = false : this.dark = true;
        },
        ricerca(){
            this.utenti.filter((element) => {
                this.nomi = element.nome;
                ( this.nomi.indexOf(this.valoreInput.charAt(0).toUpperCase() + this.valoreInput.substr(1).toLowerCase()) > -1 ) ? element.visibile = true : element.visibile = false;
            });
        },
        visualizzaMenu(){
            ( this.menu == 'hidden' ) ? this.menu = 'show' : this.menu = 'hidden';
        },
        eliminaMessaggio(index){
            this.utenti[this.contatoreUtente].messaggio.splice(index, 1);
        }
    }
});