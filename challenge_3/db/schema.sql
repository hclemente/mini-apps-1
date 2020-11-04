drop database checkout;

create database checkout;

use checkout;

create table purchases (
  id int not null auto_increment primary key,
  user varchar(50),
  email varchar(50),
  password varchar(50),
  address_line_1 varchar(50),
  address_line_2 varchar(50),
  city varchar(50),
  state varchar(50),
  zip_code int,
  phone_number varchar(50),
  cc_number bigint null,
  expires varchar(50) null,
  cvv int null,
  cc_zip int null
);

-- create table contact (
--   id int not null auto_increment primary key,
--   address_line_1 varchar(50),
--   address_line_2 varchar(50),
--   city varchar(50),
--   state varchar(50),
--   zip_code int,
--   phone_number varchar(50),
--   foreign key (id) references login(id)
-- );

-- create table credit (
--   id int not null auto_increment primary key,
--   cc_number int not null,
--   expires varchar(50) not null,
--   cvv int not null,
--   cc_zip int not null,
--   foreign key (id) references login(id)
-- );

-- mysql -u root -p // to boot mysql server
-- DESCRIBE <table name> // schema
-- USE <database name> // takes you to the database
-- INSERT INTO <table name> (column_1,column_2,...) VALUES (value_1,value_2,...);
-- UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition ID = 3;
-- quit // exit mysql into directory
-- DROP TABLE <table name> // drop an existing MySQL table
-- FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
-- DROP DATABASE databasename;
-- ALTER TABLE table ADD [COLUMN] column_name column_definition [FIRST|AFTER existing_column];
-- TRUNCATE [TABLE] table_name;