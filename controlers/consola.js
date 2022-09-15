const path = require("path");

// Process when the route is called
exports.getAltaConsola = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','formulario.html'))
}

exports.postAltaConsola = (req,res)=>{
    console.log(req.body)
    //res.json({estado:"Exitoso"})
    //var res = /[\W_]/g
    var str = req.body.palabra;
    var palabra1 = str.toLowerCase().replace(res, '');
    var palabraInv = palabra1.split('').reverse().join('');
    if (palabra1 == palabraInv){
        var strF = req.body.palabraf;
        for(var i = 0;i<10;i++){
            strF = strF.replace("fa","")
            strF = strF.replace("fe","")
            strF = strF.replace("fi","")
            strF = strF.replace("fo","")
            strF = strF.replace("fu","")
        } 
        res.json({"la palabra es palindrome":strF})
    } else{
        res.json({"La palabra no es palindrome": strF})
    }
    
}

exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de la consola</h1>')
}

