create database bhavani in postgres with 
Username:postgres
Password:postgres

Then create table 
CREATE TABLE public.employee (
	id serial4 NOT NULL,
	name varchar NOT NULL,
	email varchar NOT NULL,
	age int4 NOT NULL,
	dob timestamp NULL,
	CONSTRAINT employee_pkey PRIMARY KEY (id)
);


git clone -b main https://github.com/Bhavani6079/project_employees.git

go to project_emlployee and run is commands
1.npm install
2.npm start

after that go folder project_employee/src/frotend open index.html in browser.

