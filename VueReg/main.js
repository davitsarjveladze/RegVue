const app = new Vue({
    el: '#app',
    data: {
        user:{
            name: null,
            age: null,
            mail:null,
            other:null
        },
        chans: true

    },
    mounted() {
        if (localStorage.getItem('user')) {
            try {
                this.user = JSON.parse(localStorage.getItem('user'));
            } catch(e) {
                localStorage.removeItem('user');
            }
        }
    },
    methods: {
        deleteUser(){
          this.user.other = null;
          this.user.age = null;
          this.user.mail = null;
          this.user.name = null;
            localStorage.removeItem('user');
            this.chans = !this.chans
        },
        addUser() {
            this.saveUser()
        },
        validateAuth(){
            let submissionError =  false;
            Object.keys(this.user).forEach(key=> {
                if(this.user[key]===null) {
                    submissionError=true;
                    return
                }
            })
            return submissionError
        },
        saveUser(){
            const parsed = JSON.stringify(this.user);
            const submissionError = this.validateAuth();
            if(submissionError) {
                alert("fill in the form")
            } else {
                localStorage.setItem('user', parsed);
                this.chans = !this.chans
            }



        }
    }
})