// Require login

// next, is function is run when middleware is done
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "You must log in!" });
    }
    // then continue
    next();
};