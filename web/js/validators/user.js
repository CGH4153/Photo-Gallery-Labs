"use strict";

 const userValidator = {
    validateRegister: function (formData) {
        let errors = [];

        let firstName = formData.get("firstName");
        let lastName = formData.get("lastName");
        let password = formData.get("password");
        let password2 = formData.get("password2");

        if (firstName.length < 3 || lastName.length < 3) {
            errors.push("El nombre y apellidos deben tener más de 3 carácteres");
        }

        if (password !== password2) {
            errors.push("Las contraseñas deben coincidir");
        }

        return errors;
    }
 };

 export { userValidator };