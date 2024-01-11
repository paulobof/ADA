-- BANCO DE DADOS
-- criando banco de dados
CREATE SCHEMA IF NOT EXISTS mod04aula02;

-- usando o banco de dados
USE `mod04aula02`;

-- USERS
-- criando tabela users
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  age INT
);