ALTER TABLE nitish_academy.users DROP COLUMN name;
ALTER TABLE nitish_academy.users ADD COLUMN first_name VARCHAR(100), ADD COLUMN last_name VARCHAR(100), ADD COLUMN phone VARCHAR(20);