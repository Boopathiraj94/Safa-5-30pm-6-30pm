/* how to create the database (db)?
syntax
======
 create database database_name
*/
create database wall_mart;

-- use the current database
-- use database_name
use wall_mart;

-- drop database
-- drop database database_name
drop database wall_mart;

-- how to create the table?
-- create table table_name (column1 datatype,column2 datatype,column3 datatype,column4 datatype....)
create table products(
  sno int,
  product_name varchar(250),
  category varchar(100),
  stock int,
  price double,
  created_at timestamp default current_timestamp()
);
-- show the description of table
-- desc table_name
desc products;

-- how to check the table datas
-- select * from table_name
-- * all columns , rows
select * from products;

-- how to insert the datas in table?
-- insert into table_name (column1,column2,column3,....) values(value1, value2,value3,...)
-- single rows
insert into products(sno,product_name,category,stock,price) 
values (1,'tomato','groceries',30,100);
-- multiple rows added
insert into products(sno,product_name,category,stock,price)
values (2,'pototo','groceries',50,30),
		(3,'carrot','groceries',60,70),
        (4,'cabbage','groceries',90,80);
        
-- delete 
-- delete from table_name => all record deleted
-- delete from table_name where column = value
delete from products where sno = 2;
delete from products where sno = 3;

-- drop
-- drop table table_name
drop table products;

-- update
-- update table_name set column1=value1,column2=value2,.... where column = value
update products set product_name = 'tomato vegi' where sno = 1;
update products set product_name = 'tomato vegi', stock=35,price = 150 where sno = 1;
-- truncate
truncate table products
