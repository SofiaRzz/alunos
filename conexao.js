import sequelize from './db.js'
import Aluno from './aluno.js'

export async function create(data){
    const resultadoCreate = await Aluno.create({
        nome: data.nome,
        dataNasc: data.dataNasc,
        matricula: data.matricula,
        status: data.status,
        email: data.email,
    })
   return resultadoCreate;
}

export async function update(data){
    const aluno = await Aluno.findByPk(id);
    aluno.set({
        nome: data.nome,
        dataNasc: data.dataNasc,
        matricula: data.matricula,
        status: data.status,
        email: data.email

    })

    const resultadoUpdate = await aluno.save();
    return resultadoUpdate;
}

export async function deleta(id){
    return Aluno.destroy({where: {id: id}})
}

export async function readAll(){
    return await Aluno.findAll();
}

export async function readOne(id){
    return await Aluno.findByPk(id);
}
