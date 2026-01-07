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
insert into products(sno,product_name,category,stock,product_price)
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
truncate table products;
-- alter for new column
-- alter table table_name add column datatype
alter table products add descriptions varchar(100);
desc products; 
-- alter table table_name drop column columnName 
alter table products drop column descriptions; 
-- data type change
-- alter table table_name modify column columnname datatype
alter table products modify column descriptions text; 
-- change column name 
-- Alter table table_name change column old_name new_name datatype;
alter table products change column price product_price double;

-- TCL
set autocommit = 0;
select * from products;
delete from products;

start transaction;
 insert into products(sno,product_name,category,stock,product_price) 
values (1,'tomato','500',30,100);

update products set category ='gorceries' where sno = 1;


commit;

rollback;
-- dql
-- select 
select * from products;
select * from products where product_name = 'tomato';
update products set stock=30 where sno = 3;

select * from products where stock = 30;
select * from products where stock = 30 and product_price >80;
-- 

select * from products where category = 'groceries' and product_price >=50;


select product_name,category,stock from products where stock =40 or product_price >90;

select * from products where stock >= 35 and stock <=50;

select * from products where stock != 30; 
select * from products where stock <> 30;
select * from products where  not stock = 30;

select distinct category from products;

-- in ()  multiple or  
select * from products where stock = 30 or stock =60 or stock = 90; 
select * from products where stock in (30,60,90); 
-- Limit => limited rows show
select * from products limit 2;
select * from products where stock in (30,60,90) limit 2 ; 
-- offset -> skip 
select * from products limit 3; 
-- order by asc , desc
 select * from products order by product_name asc;
  select * from products order by  product_name desc ,sno asc;
  select * from products where stock in (30,60,90) order by product_name asc limit 2;
  -- NULL
insert into products(sno,product_name,category,stock,product_price) 
values (1,'tomato',null,30,100);

select * from products where category is not null;
select * from products where category is  null;

-- between
select * from products where product_price >=50 and product_price <=100;

select * from products where product_price between 50 and 100;

select *,date_format(created_at , "%y-%m-%d") as created_at from products;
 select *,date_format(created_at , "%Y-%m-%d") as created_at from products
 where date_format(created_at , "%Y-%m-%d") between  '2026-01-01' and '2026-01-05';
 
 select product_name,category,stock,'200' as per_price,(stock*200) as Total_stock_price,
 date_format(created_at , "%Y-%m-%d") as created_at,'Safa' as software_developer
 from products;
 
 -- like % , _
 -- _single letter
 select * from products where product_name like 'cabbag%';
  select * from products where product_name like '%e';
   select * from products where product_name like '%ato';
  select * from products where product_name like '%rr%';
  
  select * from products where product_name like '__t%';
  select * from products where product_name like '%_m_%';