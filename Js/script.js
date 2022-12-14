const { crateApp } = Vue

.createApp({
    data(){
        return {
            list : [
                {
                    text : 'pane',
                    done : false,
                },
                {
                    text : 'latte',
                    done : false,
                },
                {
                    text : 'pasta',
                    done : true,
                },
                {
                    text : 'carne',
                    done : true,
                },
                {
                    text : 'uova',
                    done : true,
                },
                {
                    text : 'yogurt',
                    done : true,
                },
                {
                    text : 'olio',
                    done : false,
                },
                {
                    text : 'fagioli',
                    done : true,
                },
                {
                    text : 'aceto',
                    done : false,
                },
                {
                    text : 'sale',
                    done : false,
                },
            ],
        }
    },

    methods : {
        
    }
}).mount('#app');