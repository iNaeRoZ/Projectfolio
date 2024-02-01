create table projects (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  type_id int not null,
  author VARCHAR(255) not null,
  date VARCHAR(255) not null,
  description VARCHAR(255) not null,
  image VARCHAR(255) not null
);

create table type_project (
  id int unsigned primary key auto_increment not null,
  type VARCHAR(255) not null
);

insert into projects (name,type_id,author,date,description,image) VALUES ('Just_React',1,'Hédi Sghaier / Vincent Ducamp / Maxim Signoret','20/09/23 - 06/10/23','Creer un site en static avec la possibilté de creer un post , liker le post , la possibilité de mettre un commentaire ainsi que de le partager','https://i.pinimg.com/originals/e1/63/7d/e1637dca3c0adc0393939fa9ce4a988b.png');
insert into projects (name,type_id,author,date,description,image) VALUES ('Watch Now',1,'Jean Marc Zonghero / Thibaud Dupuis / Maxim Signoret','18/10/23 - 17/11/23','Plateforme de location de films en digitalisé','https://i.pinimg.com/736x/a2/dd/36/a2dd36c7feb6d492c264be8e716f175c.jpg');
insert into projects (name,type_id,author,date,description,image) VALUES ('Externatic',1,'Hipticem Maamir / Olivier Morin / Antonin Pasquier / Maxim Signoret','01/12/23 - 26/01/24','Site d\'annonces d\'offres d\'emploi','https://www.externatic.fr/wp-content/uploads/2020/10/EXTERNATIC-LOGO-VERTICAL-RVB.png');
insert into projects (name,type_id,author,date,description,image) VALUES ('Calendrier de l\'Après',2,'Antonin Pasquier / Thibaud Dupuis / Sébastien Romeo / Hédi Sghaier / Maxim Signoret','23/11/23 - 24/11/23','Hackathon sur le thème de noël avec comme idées d\'un calendrier de l\'avent','https://static.vecteezy.com/ti/vecteur-libre/p3/4853009-calendrier-calendrier-date-ligne-icone-vector-illustration-logo-template-adapte-a-plusieurs-usages-gratuit-vectoriel.jpg');
insert into projects (name,type_id,author,date,description,image) VALUES ('Persona',2,'Thibaud Dupuis / Antonin Pasquier / Sébastien Romeo / Olivier Morin / Grégory Duffort / Maxim Signoret','17/01/24 - 19/01/24','Projet en collaboration avec L\'Oréal , idée d\'un assistant soin personalisé','https://i.pinimg.com/originals/7e/dd/67/7edd6788222c33ac26bb7c680a4f26f8.png');


insert into type_project (type) VALUES ('Projet');
insert into type_project (type) VALUES ('Hackathon');