
class InfoController {
    Index(req, res){
        res.json(
            { 
                version: "0.0.1",
                paths: [
                    "/estoyvivo"
                ] 
            }
            ); 
    }

    Autores(req, res){
        res.json({
            autor1:"FATV",
            autor2:"JCOP"
        });
    }
}

module.exports = new InfoController();