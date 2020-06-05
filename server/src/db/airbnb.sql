

CREATE TABLE  users (
    userid INT NOT NULL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    tel INT,
    email INT,
    pasword  VARCHAR(50),
    host BOOLEAN
);

CREATE TABLE sleepingArrangement(
    idsleeping INT NOT NULL  PRIMARY KEY,
    `rajouter des un type pour stocker `
);

CREATE TABLE bed(
    idbed INT NOT NULL PRIMARY KEY,
    bedtyp ENUM('2','1'),
    nbbed INT
);

CREATE TABLE goods (
    name VARCHAR(50),
    nbrChambre INT,
    description VARCHAR(255),

)

