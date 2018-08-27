drop database if exists burgerDump;

create database if not exists burgerDump;

use burgerDump;

create table burgers (
	id int not null auto_increment,
    primary key (id),
	burgerName varchar(255) not null,
    inBelly boolean not null
)