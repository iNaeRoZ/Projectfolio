create table project (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  type_id int not null,
  author VARCHAR(255) not null,
  date VARCHAR(255) not null,
  description VARCHAR(255) not null
);

create table type_project (
  id int unsigned primary key auto_increment not null,
  type VARCHAR(255) not null
);

insert into project (name,type_id,author,date,description) VALUES ('Just_React',1,'Hédi Sghaier / Vincent Ducamp / Maxim Signoret','20/09/23 - 06/10/23','Creer un site en static avec la possibilté de creer un post , liker le post , la possibilité de mettre un commentaire ainsi que de le partager');
insert into project (name,type_id,author,date,description) VALUES ('Watch Now',1,'Jean Marc Zonghero / Thibaud Dupuis / Maxim Signoret','18/10/23 - 17/11/23','Plateforme de location de films en digitalisé');
insert into project (name,type_id,author,date,description) VALUES ('Externatic',1,'Hipticem Maamir / Olivier Morin / Antonin Pasquier / Maxim Signoret','01/12/23 - 26/01/24','Site d\'annonces d\'offres d\'emploi');
insert into project (name,type_id,author,date,description) VALUES ('Calendrier de l\'Après',2,'Antonin Pasquier / Thibaud Dupuis / Sébastien Romeo / Hédi Sghaier / Maxim Signoret','23/11/23 - 24/11/23','Hackathon sur le thème de noël avec comme idées d\'un calendrier de l\'avent');
insert into project (name,type_id,author,date,description) VALUES ('Persona',2,'Thibaud Dupuis / Antonin Pasquier / Sébastien Romeo / Olivier Morin / Grégory Duffort / Maxim Signoret','17/01/24 - 19/01/24','Projet en collaboration avec L\'Oréal , idée d\'un assistant soin personalisé');


insert into type_project (type) VALUES ('Projet');
insert into type_project (type) VALUES ('Hackathon');