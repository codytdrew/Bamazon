DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yo-Yo", "Toys", 13.67, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pokemon", "Video Games", 49.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nerf Gun", "Toys", 32.09, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bouldering Shoes", "Outdoors", 83.63, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kids Bop Volume 80000", "Music", 5.48, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adult Coloring Book", "Art", 9.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drone", "Electronics", 179.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo 64", "Video Games", 250.00, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Balloons", "Toys", 4.50, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Puzzle", "Games", 12.62, 65);

SELECT * FROM products;