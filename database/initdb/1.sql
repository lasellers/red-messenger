/* CREATE DATABASE redmessenger; -- handled by mariadb docker automatically */
USE redmessenger;
/*  -- handled by mariadb docker automatically
CREATE USER 'redmessenger' IDENTIFIED BY 'password';
GRANT ALL ON *.* TO 'apiblade'@'%';
*/
create table docker_entrypoint_initdb (id int, created_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
insert into docker_entrypoint_initdb (id) values (1);
