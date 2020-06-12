
CREATE TABLE IF NOT EXISTS users (
    iduser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    tel INT,
    email VARCHAR(255),
    password  VARCHAR(50),
    host BOOLEAN
);

CREATE TABLE IF NOT EXISTS realEstate (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idhost INT,
    name VARCHAR(50),
    nbrPlace INT,
    description VARCHAR(255),
    pricePp INT,
    CONSTRAINT fk_user_realEstate_id FOREIGN KEY (idhost) REFERENCES users(iduser)
);

/*
CREATE TABLE IF NOT EXISTS bed(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idestate INT,
    bedtyp ENUM('2 place','1 place'),
    nbrbed INT,
    CONSTRAINT fk_bed_realEstate_id FOREIGN KEY (idestate) REFERENCES realEstate(id)
);
 if i had enough time
CREATE TABLE IF NOT EXISTS facilities(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idestate INT,
    gym BOOLEAN,
    pool BOOLEAN,
    hottub BOOLEAN,
    freeparking BOOLEAN,
    CONSTRAINT fk_facilities_realEstate_id FOREIGN KEY (idestate) REFERENCES realEstate(id)
);

 CREATE TABLE IF NOT EXISTS Amenities(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idestate INT,
    kitchen BOOLEAN,
    shampoo BOOLEAN,
    heating BOOLEAN,
    wifi BOOLEAN,
    tv BOOLEAN,
    washer BOOLEAN,
    CONSTRAINT fk_amenities_realEstate_id FOREIGN KEY (idestate) REFERENCES realEstate(id)
); */

CREATE TABLE IF NOT EXISTS reservation (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idclient INT,
    idestate INT NOT NULL,
    debutsejour DATE ,
    finsejour DATE ,
    prixtotal INT,
    annuler BOOLEAN,
    CONSTRAINT fk_reservation_user_id FOREIGN KEY (idclient) REFERENCES users(iduser),
    CONSTRAINT fk_reservation_realEstate_id FOREIGN KEY (idestate) REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS localisation(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idestate INT,
    city VARCHAR(255),
    streetaddress INT,
    road VARCHAR(255),
    code INT,
    details VARCHAR(200),
    CONSTRAINT fk_localistaion_realEstate_id FOREIGN KEY (idestate) REFERENCES realEstate(id)
);


