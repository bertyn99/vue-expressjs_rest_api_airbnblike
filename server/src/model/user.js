module.exports = class User {
    constructor(firstname, lastname, tel, email, passwd, imgUrl, host) {

        this.nom = firstname;
        this.prenom = lastname;
        this.tel = tel;
        this.email = email;
        this.passwd = passwd;
        this.imgUrl = imgUrl;
        this.host = false
    }
}