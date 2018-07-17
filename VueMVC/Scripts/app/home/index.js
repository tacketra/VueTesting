import Vue from 'vue'
import tab from './TabComponent.vue'
import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

new Vue({
    el: '#app',
    components: {
        tab,
        SweetModal,
        SweetModalTab
    },
    data: {
        buttonText: 'Message from me',
        show: true,
        showLabel: "hide",
        showText: "I'm shown!",
        currentTab: '',
        tabs: [
            { id: 1, name: 'Home' },
            { id: 2, name: 'Menu' },
            { id: 3, name: 'Profile' }
        ]
    },
    methods: {
        toggleModal (){
            this.$refs.modal.open();
        },
        toggleButton() {
            this.show = !this.show;
            this.showLabel = this.show ? "hide" : "show";

            return this.showLabel;
        }
    }
})

app.show = false;