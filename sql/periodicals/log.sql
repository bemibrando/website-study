// Create database named "study1"
CREATE DATABASE study1;

// Select database "study1" to use
USE study1;

// Creating tables
CREATE TABLE researchers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	researcher_name VARCHAR(50)
);

CREATE TABLE works (
	id INT AUTO_INCREMENT PRIMARY KEY,
	work_name VARCHAR(250),
	content VARCHAR(5000)
);

CREATE TABLE work_researchers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fk_work_id INT,
	fk_researcher_id INT,
	FOREIGN KEY (fk_work_id) REFERENCES works(id),
	FOREIGN KEY (fk_researcher_id) REFERENCES researchers(id)
);

CREATE TABLE countries (
	id INT AUTO_INCREMENT PRIMARY KEY,
	country_name VARCHAR(25)
);

CREATE TABLE publishing_companies (
	id INT AUTO_INCREMENT PRIMARY KEY,
	company_name VARCHAR(50),
	fk_country_id INT,
	FOREIGN KEY (fk_country_id) REFERENCES countries(id)
);

CREATE TABLE periodicals (
	id INT AUTO_INCREMENT PRIMARY KEY,
	periodic_name VARCHAR(50),
	issn INT UNIQUE,
	fk_publishing_company_id INT,
	FOREIGN KEY (fk_publishing_company_id) REFERENCES publishing_companies(id)
);

CREATE TABLE works_periodicals (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fk_periodic_id INT,
	fk_work_id INT,
	FOREIGN KEY (fk_periodic_id) REFERENCES periodicals(id),
	FOREIGN KEY (fk_work_id) REFERENCES works(id)
);

// Delete database named "study1"
DROP DATABASE study1;
