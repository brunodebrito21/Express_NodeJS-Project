module.exports={
        alunos : [
                    {id:1,name:"Bruno"},
                    {id:2,name:"betin"}
                 ],
    
        getAll:()=>{
            return(JSON.stringify(this.alunos))
        },
    
        getAlumn:(id)=>{
            return this.alunos[id]
        },
    
        deleteAlumn:(id)=>{
            this.alunos = this.alunos.replace(id,1)
            return this.alunos
        },
        
        newAlumn:(id,name)=>{
            let aluno = {id:id,name:name}
            this.alunos.push(aluno)
        }
    
    }

