import Vue from 'vue'
import FirstComponent from './FirstComponent.vue'
import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

new Vue({
    el: '#app',
    components: {
        FirstComponent,
        SweetModal,
        SweetModalTab
    },
    data: {
        buttonText: 'Message from me',
        show: true,
        showLabel: "hide",
        showText: "I'm shown!",
        timer: ''
    },
    methods: {
        toggleModal (){
            this.$refs.modal.open();
        },
        toggleButton() {
            this.show = !this.show;
            this.showLabel = this.show ? "hide" : "show";

            return this.showLabel;
        },
        updateTimer() {
            this.timer = new Date();
        }
    },
    mounted: function () {
        this.interval = setInterval(this.updateTimer, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
})

app.show = false;