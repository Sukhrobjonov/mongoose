const Joi = require("joi");

module.exports = class Validations {
    static async registrationValidation(data) {
        return await Joi.object({
            name: Joi.string()
                .min(3)
                .max(32)
                .required()
                .error(
                    new Error("Длина имени должна быть не менее 3-х символов")
                ),
            email: Joi.string()
                .email()
                .required()
                .lowercase()
                .error(new Error("Электронная почта недействительна")),
            password: Joi.string()
                .min(4)
                .required()
                .error(
                    new Error("Длина пароля должна быть не менее 4 символов")
                ),
        }).validateAsync(data);
    }
};
