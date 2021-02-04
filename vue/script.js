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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
                    },
                    {
                        data: moment().format('llll'),
                        testo: 'Tutto bene! E tu?',
                        stato: 'inviato',
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        elimina: 'Elimina',
                        menu: 'hidden'
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
                        menu: 'hidden'
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
    methods: {
        chatDinamica(index){
            this.contatoreUtente = index;
        },
        inserimentoInput(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: this.testoInput, data: moment().format('llll'), stato: 'inviato', elimina: 'Elimina', menu: 'hidden'} );
            this.testoInput = '';
            setTimeout(this.funzioneRisposta,1000);
        },
        funzioneRisposta(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: 'ok', data: moment().format('llll'), stato: 'ricevuto', elimina: 'Elimina', menu: 'hidden'} );
        },
        darkMode(){
            ( this.dark ) ? this.dark = false : this.dark = true;
        },
        ricerca(){
            this.utenti.forEach((element) => {
                this.nomi = element.nome.toLowerCase();
                ( this.nomi.indexOf(this.valoreInput.toLowerCase()) > -1 ) ? element.visibile = true : element.visibile = false;
            });
        },
        // visualizzaMenu(index){
        //     // this.utenti[this.contatoreUtente].messaggio.forEach((element) => {
        //     //     ( element.menu == 'hidden' ) ? element.menu = 'show' : element.menu = 'hidden';
        //     // console.log(element.menu)
        //     // });
        //     let element = document.getElementById('prova');
        //     if ( element.classList.contains('hidden') ){
        //     element.classList.remove('hidden');
        //     element.classList.add('show');
        //     } else {
        //         element.classList.remove('show');
        //         element.classList.add('hidden');
        //     }
        //     console.log(element);
        // },
        eliminaMessaggio(index){
            this.utenti[this.contatoreUtente].messaggio.splice(index, 1);
        }
    }
});