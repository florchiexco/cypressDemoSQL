CREATE DATABASE IF NOT EXISTS cypressdemo;

USE cypressdemo;

CREATE TABLE persons (name VARCHAR(50), address VARCHAR(30), age INT);
CREATE TABLE pets (name VARCHAR(50), age INT, type VARCHAR(50));

INSERT INTO persons (name, address, age) VALUES ('Florencia Excoffon', 'Calle 123', 22), ('Julian Aga', 'Street 321', 22);

ALTER TABLE persons ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE pets ADD COLUMN owner INT;
ALTER TABLE pets ADD FOREIGN KEY (owner) REFERENCES persons(id);

INSERT INTO pets (name, age, type, owner) VALUES ('Anita', 8, 'Dog', 1), ('Sasuke', 2, 'Guinea Pig', 2), ('Inosuke', 1, 'Guinea Pig', 1);