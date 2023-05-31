import sequelize from './db.js';
import Sequelize from 'sequelize';

const Aluno = sequelize.define ('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        
    },
    dataNasc: {
        type: Sequelize.STRING,

    },
    matricula: {
        type: Sequelize.STRING,

    },
    status: {
        type: Sequelize.STRING,

    },
    email: {
        type: Sequelize.STRING,

    }
})

export default Aluno;