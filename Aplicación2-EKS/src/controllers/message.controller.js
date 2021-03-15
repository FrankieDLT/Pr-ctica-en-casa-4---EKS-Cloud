class MessageController {
    estoyvivo(req, res) {
        res.json({
            status: "si estoy vivo"
        });
    }
    imstillstanding(req, res) {
        res.json({
            status: "better than i ever did..."
        });
    }

}

module.exports = new MessageController();