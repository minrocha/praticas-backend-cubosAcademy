create database modelagem_dados;

create table categorias (
	id serial primary key,
  nome varchar(50) unique
);

create table produtos (
	id serial primary key,
  nome varchar(100),
  descricao text,
  preco int,
  quantidade_em_estoque int,
  categoria_id int references categorias(id)
);

create table clientes (
	cpf char(11) unique,
  nome varchar(150)
);

create table vendendores (
	cpf char(11) unique,
  nome varchar(150)
);

create table pedidos (
	id serial primary key,
  valor int,
  cliente_cpf char(11) references clientes(cpf),
  vendendor_cpf char(11) references vendendores(cpf)
);

create table intens_do_pedido (
	id serial primary key,
  pedido_id int references pedidos(id),
  quantidade int,
  produto_id int references produtos(id)
);

insert into categorias (nome)
values 
('frutas'), 
('verduras'), 
('massas'), 
('bebidas'), 
('utilidades');

insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id)
values
('Mamão',	'Rico em vitamina A, potássio e vitamina C',	300,	123,	1),
('Maça',	'Fonte de potássio e fibras.',	90,	34,	1),
('Cebola',	'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76,	2),
('Abacate',	'NÃO CONTÉM GLÚTEN.',	150,	64,	1),
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88,	2),
('Acelga',	'NÃO CONTÉM GLÚTEN.',	235,	13,	2),
('Macarrão parafuso',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690,	5,	3),
('Massa para lasanha',	'Uma reunião de família precisa ter comida boa e muita alegria.',	875,	19,	3),
('Refrigerante coca cola lata',	'Sabor original',	350,	189,	4),
('Refrigerante Pepsi 2l',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',	700,	12,	4),
('Cerveja Heineken 600ml',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',	1200,	500,	4),
('Agua mineral sem gás',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',	130,	478,	4),
('Vassoura',	'Pigmento, matéria sintética e metal.',	2350,	30,	5),
('Saco para lixo',	'Reforçado para garantir mais segurança',	1340,	90,	5),
('Escova dental',	'Faça uma limpeza profunda com a tecnologia inovadora',	1000,	44,	5),
('Balde para lixo 50l',	'Possui tampa e fabricado com material reciclado',	2290,	55,	5),
('Manga',	'Rico em Vitamina A, potássio e vitamina C',	198,	176,	1),
('Uva',	'NÃO CONTÉM GLÚTEN.',	420,	90,	1);

insert into clientes (cpf, nome)
values
('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018',	'Maria da Conceição');

insert into vendendores (cpf, nome)
values
('82539841031',	'Rodrigo Sampaio'),
('23262546003',	'Beatriz Souza Santos'),
('28007155023',	'Carlos Eduardo');

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 1 
where nome = 'Mamão';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 1 
where nome = 'Refrigerante Pepsi 2l';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 6 
where nome = 'Cerveja Heineken 600ml';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 10 
where nome = 'Manga';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 3
where nome = 'Uva';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 5 
where nome = 'Mamão';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 10 
where nome = 'Tomate';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 2 
where nome = 'Acelga';

-- ///

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 1 
where nome = 'Vassoura';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 6 
where nome = 'Agua mineral sem gás';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 5 
where nome = 'Manga';

-- ///

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 1
where nome = 'Balde para lixo 50l';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 6
where nome = 'Uva';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 1
where nome = 'Macarrão parafuso';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 3 
where nome = 'Mamão';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 20 
where nome = 'Tomate';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 2 
where nome = 'Acelga';

--  ///
update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 8
where nome = 'Uva';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 8
where nome = 'Massa para lasanha';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 3 
where nome = 'Manga';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 8 
where nome = 'Tomate';

update produtos 
set quantidade_em_estoque =  quantidade_em_estoque - 2 
where nome = 'Cerveja Heineken 600ml';