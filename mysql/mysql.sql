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
  
  use wall_mart;
  -- aggregation
  
  select sum(stock) as "Total_stock",min(stock) as "min_stock" ,
  max(stock) as "max_stock",count(stock) as "Total Product",avg(stock) as "avg_stock"
  
  from products ;
  select   date(created_at) from products;
  
  
  select sum(stock) as "Total_stock",min(stock) as "min_stock" ,
  max(stock) as "max_stock",count(stock) as "Total Product",avg(stock) as "avg_stock" 
  from products where date(created_at) = '2026-01-02';
  
  update products set category='snackes' where sno = 1;
  
  select category, sum(stock),min(stock) from products  group by category
  having category <> 'snackes';
  
select category, sum(stock),min(stock) from products  group by category 
having sum(stock) >100;
	
select category, sum(stock),min(stock) from products  group by category order by category;
select category, sum(stock),min(stock) from products  group by category order by sum(stock) desc;

-- not null
create table employees(emp_id int not null , emp_name varchar(100) not null,
age int , dob date not null , address text not null , phone varchar(15) not null
);

drop table employees;

--  primary key
create table employees(emp_id int primary key auto_increment, emp_name varchar(100) not null,
age int , dob date not null , address text not null , phone varchar(15) not null);


create table employees(emp_id int auto_increment, emp_name varchar(100) not null,
age int , dob date not null , address text not null , 
phone varchar(15) not null,primary key(emp_id));


create table employees(emp_id int auto_increment, emp_name varchar(100) not null,
age int , dob date not null , address text not null , 
phone varchar(15) not null, constraint pk_emp_id primary key(emp_id) );

desc employees;

-- unique
create table employees(emp_id int primary key auto_increment , emp_name varchar(100) not null,
age int , dob date not null , address text not null , 
phone varchar(15) unique key,email_id varchar(100) unique key,pan_no varchar(200) unique key);

-- default

create table employees(emp_id int primary key auto_increment , emp_name varchar(100) not null,
age int , dob date not null , address varchar(100)  default 'Trichy' , 
phone varchar(15) unique key,email_id varchar(100) unique key,pan_no varchar(200) unique key,
added_at timestamp default current_timestamp()
);

-- check 

create table employees(emp_id int primary key auto_increment , emp_name varchar(100) not null,
age int , dob date not null , address varchar(100)  default 'Trichy' , 
phone varchar(15) unique key,email_id varchar(100) unique key,pan_no varchar(200) unique key,
added_at timestamp default current_timestamp(),check (address = 'Trichy')
);


alter table employees add check (age>=18);

drop table employees;
insert into employees (emp_name , dob,phone,email_id,pan_no) 
values('SAFA','2000-01-25','498465464sd','safad@gmail.com','12345d');

insert into employees (emp_name ,age, dob,phone,email_id) 
values('SAFA',18,'2000-01-25','4984654645ddddd','safaaddddd@gmail.com');


insert into employees (emp_name , dob,address,phone) 
values('SANA','2000-01-26','Trichy','56464446d');
select * from employees;
select * from employees;

drop table products;
use wall_mart;

create table products(pid int primary key auto_increment,pname varchar(255),
price double default 0 , employee_id int ,
foreign key (employee_id) references employees(emp_id)
);

ALTER TABLE products
DROP FOREIGN KEY products_ibfk_1;

select * from products;

insert into products (pname,price,employee_id) values('hhh',300,3);

insert into products (pname,price,employee_id) values('tomoto22',500,90);

alter table employees add index (address);

desc employees;

desc products;

-- join

 -- select t1.column1, t2.column2,t1.column3
 -- from table1 as t1 inner join table2 as t2 on  table1.column1 = table2.column1
select * from products;
select p.pname,p.price,e.emp_name,e.age,e.address,e.emp_id
 from products as p inner join employees as e on 
p.employee_id = e.emp_id; 

select p.pname,p.price,e.emp_name,e.age,e.address,e.emp_id
 from products as p left join employees as e on 
p.employee_id = e.emp_id;

select p.pname,p.price,e.emp_name,e.age,e.address,e.emp_id
 from products as p right join employees as e on 
p.employee_id = e.emp_id ; 

select products.pname , employees.emp_name from products cross join employees;

select * from employees;

create table category(cid int primary key auto_increment ,
category_name varchar(50),subcategory varchar(50), category_id int );

select * from category;

delete from category;
insert into category (category_name) values
('car'),('toy'),('dress');

insert into category (subcategory,category_id) values
('Toyoto',4),('bike toy', 5),('saree',6);

select c1.cid,c1.category_name,c2.cid as "subcat_id",c2.subcategory

 from category c1 , category c2 where c1.cid = c2.category_id order by c1.cid
