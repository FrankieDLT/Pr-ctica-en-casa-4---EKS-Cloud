class MessageController {
    revisasivivo(req, res) {
        res.json({
            status: "si estoy vivo"
        });
    }
}

module.exports = new MessageController();