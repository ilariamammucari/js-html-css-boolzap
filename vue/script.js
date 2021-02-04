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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
                        testo: 'Ciao,come stai?',
                        stato: 'ricevuto',
                        elimina: 'Elimina',
                        menu: 'hidden'
                    },
                    {
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
                        data: moment().calendar(),
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
    mounted(){
        ( moment().format('LT') >= '6:00 PM' ) ? this.dark = true : this.dark = false
        console.log(moment().format('LT'));
    },
    methods: {
        chatDinamica(index){
            this.contatoreUtente = index;
        },
        inserimentoInput(){
            if ( this.testoInput.length ){
                this.utenti[this.contatoreUtente].messaggio.push( {testo: this.testoInput, data: moment().calendar(), stato: 'inviato', elimina: 'Elimina', menu: 'hidden'} );
                this.testoInput = '';
                setTimeout(this.funzioneRisposta,1000);
            }
        },
        funzioneRisposta(){
            this.utenti[this.contatoreUtente].messaggio.push( {testo: 'ok', data: moment().calendar(), stato: 'ricevuto', elimina: 'Elimina', menu: 'hidden'} );
        },
        darkMode(){
            ( this.dark ) ? this.dark = false : this.dark = true;
        },
        ricerca(){
            this.utenti.forEach((element) => {
                this.nomi = element.nome.toLowerCase();
                ( this.nomi.indexOf(this.valoreInput.toLowerCase()) > -1 ) ? element.visibile = true : element.visibile = false
            });
        },
        visualizzaMenu(index){
            ( this.utenti[this.contatoreUtente].messaggio[index].menu == 'hidden' ) ? this.utenti[this.contatoreUtente].messaggio[index].menu = 'show' : this.utenti[this.contatoreUtente].messaggio[index].menu = 'hidden'
        },
        eliminaMessaggio(index){
            this.utenti[this.contatoreUtente].messaggio.splice(index, 1);
        }
    }
});