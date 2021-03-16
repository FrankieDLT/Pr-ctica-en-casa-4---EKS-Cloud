
class InfoController {
    Index(req, res){
        res.send("<h1> Esta es la aplicación 1 </h1>"); 
    }

    Autores(req, res){
        res.json({
            autor1:"FATV",
            autor2:"JCOP"
        });
    }
}

module.exports = new InfoController();