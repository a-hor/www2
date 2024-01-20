sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
sudo mysql
sudo systemctl start mysqld
sudo systemctl status mysqld
sudo mysql


-----
create user 'biblioteczka'@'localhost' identified by 'biblioteczka123';
grant all privileges on *.* to 'biblioteczka'@'localhost' with grant option;
flush privileges;
exit
mysql -u biblioteczka -p
create database baza_biblioteczka
use baza_biblioteczka
create table books (bk_id int auto_increment primary key, bk_title varchar(250), bk_aut_id int);
create table authors (aut_id int auto_increment primary key, aut_name varchar(250), aut_surname varchar(250));
create index idx_bk_auth on books (bk_aut_id)
alter table books add constraint fk_bk_auth foreign key (bk_aut_id) references authors(aut_id);
insert into authors (aut_name, aut_surname) values ('imie1', 'nazwisko1');
insert into authors (aut_name, aut_surname) values ('imie2', 'nazwisko2');
insert into authors (aut_name, aut_surname) values ('imie3', 'nazwisko3');
insert into authors (aut_name, aut_surname) values ('imie4', 'nazwisko4');
insert into authors (aut_name, aut_surname) values ('imie5', 'nazwisko5');
insert into books (bk_title, bk_aut_id) values ('ksiazka1', 1);
insert into books (bk_title, bk_aut_id) values ('ksiazka2', 1);
insert into books (bk_title, bk_aut_id) values ('ksiazka3', 1);
insert into books (bk_title, bk_aut_id) values ('ksiazka4', 2);
insert into books (bk_title, bk_aut_id) values ('ksiazka5', 3);
insert into books (bk_title, bk_aut_id) values ('ksiazka6', 4);
insert into books (bk_title, bk_aut_id) values ('ksiazka7', 4);
insert into books (bk_title, bk_aut_id) values ('ksiazka8', 5);
