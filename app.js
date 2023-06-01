import express from "express";
import {create, update, deleta, readAll, readOne} from './conexao.js';
import sequelize from "./db.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**const alunos = [
  {
    id: 1,
    nome: "Sofia",
    dataNasc: "2006-01-07",
    matricula: "2021321147",
    status: "Ativa",
    email: "spr2@aluno.ifal.edu.br",
  },
  {
    id: 2,
    nome: "Lucas",
    dataNasc: "2005-04-16",
    matricula: "2021319327",
    status: "Ativa",
    email: "mlfd1@aluno.ifal.edu.br",
  },
  {
    id: 3,
    nome: "Fernanda",
    dataNasc: "2006-05-12",
    matricula: "2021312245",
    status: "Ativa",
    email: "fam2@aluno.ifal.edu.br",
  },
];**/

app.get("/", (req, res) => {
  res.render("home", {alunos: readAll()});
});

app.get("/cad-alt/:id?", (req, res) => {
  if (req.params.id) {
    const id = Number(req.params.id);
    const aluno = readOne(id)
    //const aluno = alunos.find((aluno) => aluno.id == id);
    res.render("cad-alt", { aluno: aluno });
  } else {
    res.render("cad-alt", { aluno: null });
  }
});

app.delete("/alunos/:id", (req, res) => {
  deleta(req.params.id)

  // const id = Number(req.params.id);
  // for (let i = 0; i < alunos.length; i++) {
  //   if (alunos[i].id == id) {
  //     alunos.splice(i, 1);
  //     break;
  //   }
  }
);

app.post("/alunos/:id?", (req, res) => {
  if (req.params.id) {
    update(req.body)

    // const id = Number(req.params.id);
    // const index = alunos.findIndex((aluno) => aluno.id == id);
    // alunos[index] = {
    //   id: id,
    //   nome: req.body.nome,
    //   dataNasc: req.body.dataNasc,
    //   matricula: req.body.matricula,
    //   status: req.body.status,
    //   email: req.body.email,
    // };

  } else {
      create(req.body)

    // alunos.push({
    //   id: alunos.at(-1).id + 1,
    //   nome: req.body.nome,
    //   dataNasc: req.body.dataNasc,
    //   matricula: req.body.matricula,
    //   status: req.body.status,
    //   email: req.body.email,
    // });
  }
  res.redirect("/");
});

app.listen(port, () => {
  sequelize.sync()
  console.log("Servidor rodando");
});
