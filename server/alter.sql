ALTER TABLE nitish_academy.users DROP COLUMN name;
ALTER TABLE nitish_academy.users ADD COLUMN first_name VARCHAR(100), ADD COLUMN last_name VARCHAR(100), ADD COLUMN phone VARCHAR(20);

//////////

CREATE TABLE achievers (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),
score VARCHAR(100),
board VARCHAR(100),
section VARCHAR(100),
rank_text VARCHAR(100),

image VARCHAR(255)

);




ALTER TABLE achievers ADD COLUMN display_order INT DEFAULT 0;



CREATE TABLE features (

id INT AUTO_INCREMENT PRIMARY KEY,

title VARCHAR(100),
description VARCHAR(255),
icon VARCHAR(255),

display_order INT DEFAULT 0

);