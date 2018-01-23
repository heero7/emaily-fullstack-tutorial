// Check if credits are sufficient

module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({error: "Insufficient credits!" });
    }

    // then continue
    next();
};