CREATE DATABASE db_blogpessoal;

USE db_blogpessoal;
 
INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 01', 'Postagem 01');
INSERT INTO tb_postagens (data, texto, titulo) 
VALUES (current_timestamp(), 'Texto da postagem 02', 'Postagem 02');
 
INSERT INTO tb_temas (descricao) 
VALUES ('Tema 01');

SELECT * FROM tb_postagens;
SELECT * FROM tb_temas;