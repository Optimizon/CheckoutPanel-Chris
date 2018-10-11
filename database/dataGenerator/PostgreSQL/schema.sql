-- DROP DATABASE IF EXISTS optimizon;
-- CREATE DATABASE optimizon;

-- GRANT ALL PRIVILEGES ON DATABASE optimizon TO optimizon;

\c optimizon;

-- DROP TABLE protection_plan CASCADE;
-- DROP TABLE product;

-- CREATE TABLE protection_plan (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR (60),
--   price NUMERIC (5,2),
--   years SMALLINT,
--   provider VARCHAR (75),
--   rating SMALLINT,
--   description VARCHAR (255)
-- );

-- CREATE TABLE product (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR (50) NOT NULL,
--   image VARCHAR (255) NOT NULL,
--   link VARCHAR (150) NOT NULL,
--   shares SMALLINT NOT NULL,
--   price NUMERIC (8,2) NOT NULL,
--   is_prime BOOLEAN NOT NULL,
--   in_stock BOOLEAN NOT NULL,
--   giftwrap_available BOOLEAN NOT NULL,
--   quantity_max SMALLINT NOT NULL,
--   seller VARCHAR (75) NOT NULL,
--   protection_plan_exists BOOLEAN NOT NULL,
--   protection_plan_id SERIAL,
--   FOREIGN KEY (protection_plan_id) REFERENCES protection_plan (id) ON DELETE RESTRICT
-- );

-- \COPY protection_plan (name, price, years, provider, rating, description) FROM '/Users/stung/Desktop/SDC/database/dataGenerator/PostgreSQL/protectionPlanDataSet.csv' DELIMITER '|' CSV HEADER;
-- \COPY product (name, image, link, shares, price, is_prime, in_stock, giftwrap_available, quantity_max, seller, protection_plan_exists) FROM '/Users/stung/Desktop/SDC/database/dataGenerator/PostgreSQL/productDataSet.csv' DELIMITER '|' CSV HEADER;

CREATE INDEX ON protection_plan (id);
CREATE INDEX ON product (id);