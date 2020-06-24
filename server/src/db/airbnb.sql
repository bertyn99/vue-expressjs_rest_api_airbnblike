
CREATE DATABASE airbnblike;

CREATE TABLE IF NOT EXISTS users (
    iduser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    tel INT,
    email VARCHAR(255),
    password  VARCHAR(200),
    imgUrl VARCHAR(255),
    host BOOLEAN
);

CREATE TABLE IF NOT EXISTS realEstate (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idhost INT,
    name VARCHAR(50),
    nbrPlace INT,
    description VARCHAR(255),
    imgUrl VARCHAR(255),
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

/*Insert*/
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (1, 1, 'Giant Forget-me-not', 6, 'nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate', 23.55);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (2, 2, 'Velvet Lupine', 2, 'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum', 22.08);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (3, 1, 'Lindheimer''s Beebalm', 6, 'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque', 39.58);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (4, 1, 'Manyfruit Cyanea', 5, 'ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus', 62.1);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (5, 1, 'Purplemat', 2, 'donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus', 39.86);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (6, 3, 'Quillaja', 4, 'orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis', 49.27);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (7, 1, 'Glandular Plantain', 4, 'non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet', 57.87);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (8, 1, 'Amazonlily', 6, 'ut erat curabitur gravida nisi at nibh in hac habitasse platea', 24.74);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (9, 2, 'Diplotomma Lichen', 4, 'sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus', 34.76);
insert into realEstate (id, idhost, name, nbrPlace, description, pricePp) values (10, 1, 'Water Cowbane', 3, 'at feugiat non pretium quis lectus suspendisse potenti in eleifend', 39.61);