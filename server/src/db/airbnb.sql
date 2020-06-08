
CREATE TABLE IF NOT EXISTS users (
    iduser INT NOT NULL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    tel INT,
    email INT,
    pasword  VARCHAR(50),
    host BOOLEAN
);

CREATE TABLE IF NOT EXISTS goods (
    id INT NOT NULL PRIMARY KEY,
    idhost INT,
    name VARCHAR(50),
    nbrChambre INT,
    description VARCHAR(255),
    CONSTRAINT fk_user_goods_id FOREIGN KEY (idhost) REFERENCES users(iduser)
);

CREATE TABLE IF NOT EXISTS bed(
    id INT NOT NULL PRIMARY KEY,
    idgood INT,
    bedtyp ENUM('2 place','1 place'),
    nbrbed INT,
    CONSTRAINT fk_bed_goods_id FOREIGN KEY (idgood) REFERENCES goods(id)
);
CREATE TABLE IF NOT EXISTS facilities(
    id INT NOT NULL PRIMARY KEY,
    idgood INT,
    gym BOOLEAN,
    pool BOOLEAN,
    hottub BOOLEAN,
    freeparking BOOLEAN,
    CONSTRAINT fk_facilities_goods_id FOREIGN KEY (idgood) REFERENCES goods(id)
);

CREATE TABLE IF NOT EXISTS Amenities(
    id INT NOT NULL PRIMARY KEY,
    idgood INT,
    kitchen BOOLEAN,
    shampoo BOOLEAN,
    heating BOOLEAN,
    wifi BOOLEAN,
    tv BOOLEAN,
    washer BOOLEAN,
    CONSTRAINT fk_amenities_goods_id FOREIGN KEY (idgood) REFERENCES goods(id)
);

CREATE TABLE IF NOT EXISTS reservation (
    id INT NOT NULL PRIMARY KEY,
    idclient INT,
    idgood INT NOT NULL,
    debutsejour DATE ,
    prixtotal INT,
    annuler BOOLEAN,
    CONSTRAINT fk_reservation_user_id FOREIGN KEY (idclient) REFERENCES users(iduser),
    CONSTRAINT fk_reservation_goods_id FOREIGN KEY (idgood) REFERENCES users(id)
);

