drop database checkout;

create database checkout;

use checkout;

create table login (
  id int not null auto_increment primary key,
  user varchar(50),
  email varchar(50),
  password varchar(50)
);

create table contact (
  id int not null auto_increment primary key,
  address_line_1 varchar(50),
  address_line_2 varchar(50),
  city varchar(50),
  state varchar(50),
  zip_code int,
  phone_number varchar(50),
  foreign key (id) references login(id)
);

create table credit (
  id int not null auto_increment primary key,
  cc_number int not null,
  expires varchar(50) not null,
  cvv int not null,
  zip_code int not null,
  foreign key (id) references login(id)
);
