const { isValidObjectId } = require("mongoose");
const categories = require("../models/CategoryModel");

module.exports = class CategoryController {
    static async CategoryGetController(req, res) {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            res.redirect("/");
            return;
        }

        const category = await categories.findOne({
            _id: id,
        });
        console.log(category);

        res.render("category", {
            user: req.user,
            category: category,
        });
    }
};
