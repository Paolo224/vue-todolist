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
        removeItem(itemRemove){
            const itemIndex = this.list.indexOf(itemRemove);

            if(itemIndex > -1){
                this.list.splice(itemIndex, 1);
            } else{
                console.warn('NOPE!')
            }
        }
    }
}).mount('#app');