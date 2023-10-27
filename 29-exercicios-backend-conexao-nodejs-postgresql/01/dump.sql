create database biblioteca;

create table autores (
	id serial primary key,
  nome text not null,
  idade int
);

create table livros (
	id serial primary key,
  nome text unique not null,
  genero varchar(2),
  editora text,
  data date,
  autor_id int references autores(id)
);