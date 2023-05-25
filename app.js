import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log("Servidor rodando")
})

const alunos = [
    {nome: "Sofia",
    dataNasc: "2006-01-07",
    matricula: "2021321147",
    status: true,
    email: "spr2@aluno.ifal.edu.br"
    },
    {nome: "Lucas",
    dataNasc: "2005-04-16",
    matricula: "2021319327",
    status: true,
    email: "mlfd1@aluno.ifal.edu.br"
    },
    {nome: "Fernanda",
    dataNasc: "2006-05-12",
    matricula: "2021312245",
    status: true,
    email: "fam2@aluno.ifal.edu.br"
    }

]