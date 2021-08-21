// const modelAlunos = require("../model/alunos")
function genID(){
    return Math.random().toString(36).substr(2,9)
}

let pessoas = []
 
const listOne = (req,res)=>{
    let id = req.body.id
    
    let resposta = pessoas.find(a=>a.id==id)
    if(!resposta){
        res.send("O nome com esse identificador ainda não foi cadastrado")
    }
    
    res.json(resposta)
}

const removeSomeone = (req,res)=>{
    let id = req.body.id
    pessoas.map((a,i)=>{
        if(a.id==id){
            pessoas.splice(i,1)
        }
    })
    res.send("Nome Removido")
}

const updatePerson=(req,res)=>{
    let id = req.body.id
    let name= req.body.name
    let contem = false

    if(name&&id||id>-1&&req.method=="PUT"){
        pessoas.forEach(a=>{
            a.name.toLowerCase()==name.toLowerCase()?contem=true:contem=false
            contem?res.send("Esse Nome já está cadastrado"):""
        })
        if(contem==false){
            pessoas.map((a,i)=>{
                if(id==a.id){
                pessoas.splice(i,1,{id,name})
                res.send("Nome Atualizado")
                }
            })
        }else{
            res.send("Este id ainda não existe")
        }
        contem=false
    }else{
        res.send("Insira um id e um nome ")
    }
    
}

const addOne = (req,res)=>{
    id = genID()
    let contem = false
    let name= req.body.name
    if(name){
        pessoas.forEach(a=>{
            a.name.toLowerCase()==name.toLowerCase()?contem=true:contem=false
            contem?res.send("Essa Pessoa já está cadastrada"):""
            
        })
    }else{
        res.send("Digite um nome")
    }
    if(contem==false){
        pessoas.push({id,name})
        res.send("Pessoa Cadastrada")
    }else{
        return
    }
    contem=false
}

const listAll = (req,res)=>{
    res.json(pessoas)
}
module.exports = {
    listAll,
    listOne,
    removeSomeone,
    addOne,
    updatePerson
}