class glaztv{
    constructor(){
        this.api = "https://glaz.tv"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async login(login,password){
        let req=await fetch(`${this.api}/account/login`,{method:"POST",headers: this.headers,body:`identity=${login}&password={password}&submit=%D0%92%D0%BE%D0%B9%D1%82%D0%B8`});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.status;
    }
    async search(q,limit){
        let req=await fetch(`${this.api}/search/full?q=${q}&limit=${limit}&timestamp=1720371875402`,{method:"GET",headers: this.headers});
        return req.text();
    }
    async register(login,email,password){
        let req=await fetch(`${this.api}/account/register`,{method:"POST",headers: this.headers,body:`identity=${login}&email=${email}&password=${password}&rePassword=${password}`});
        return req.status;
    }
    async remind(email){
        let req=await fetch(`${this.api}/account/login`,{method:"POST",headers: this.headers,body:`email=${email}`});
        return req.status;
    }
    async send_comment(id,message,type){
        let req=await fetch(`${this.api}/comments/add`,{method:"POST",headers: this.headers,body:`channel_id=${id}&message=${message}&parent_id=0&type=${type}`});
        return req.status;
    }
    async new_password(old_password,password){
        let req=await fetch(`${this.api}/account/change-password`,{method:"POST",headers: this.headers,body:`oldPassword=${old_password}&password=${password}&rePassword=${password}`});
        return req.status;
    }
}
module.exports = {glaztv};