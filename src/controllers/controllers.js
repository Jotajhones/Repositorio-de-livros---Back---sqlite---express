import { openDb } from '../config/config.js';

export async function createTabel() {
    openDb()
        .then(db => {
            db.exec(' CREATE TABLE IF NOT EXISTS  livro ( id INTERGER PRIMARY KEY NOT NULL, titulo TEXT, autor TEXT, ano INTERGER, editora TEXT, idioma TEXT, url TEXT, capa TEXT )');
            console.log('Tabela "LIVROS" criada com sucesso;');
        });
};

export function rotaRaiz(req, res) {
    res.send("Meu livrinho - API-REST");
}

export async function insertLivros(req, res) {
    let livros = req.body;
    openDb()
        .then(db => {
            db.run(
                'INSERT INTO livro (id, titulo, autor, ano, editora, idioma, url, capa) VALUES (?,?,?,?,?,?,?,?)', [livros.id, livros.titulo, livros.autor, livros.ano, livros.editora, livros.idioma, livros.url, livros.capa]);
            console.log('Adicionado;'+req.body.id);
            res.json({ "statusCode": 200 });
        });
};

export async function todosLivros(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM livro')
                .then(livros => res.json(livros));
        });
};

export async function selectID(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM livro WHERE id=?', [id])
                .then(livros => res.json(livros))
        });
};

export async function updateLivros(req, res) {
    let livros = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE livro SET titulo=?, autor=?, ano=?, editora=?, idioma=?, url=?, capa=? WHERE id=?', [livros.titulo, livros.autor, livros.ano, livros.editora, livros.idioma, livros.url, livros.capa, livros.id]);
            console.log('Atualizado');
            res.json({ "statusCode": 200 });
        });
};

export async function deleteLivros(req, res) {
    let id = req.body.id
    openDb()
        .then(db => {
            db.get('DELETE FROM livro WHERE id=?', [id])
                .then(livros => res.json(livros))
        });
    res.json({ "statusCode": 200 })
        ; console.log('DELETADO;');
};