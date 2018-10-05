-- DROP DATABASE IF EXISTS optimizon;
CREATE KEYSPACE IF NOT EXISTS optimizon with replication = {'class':'SimpleStrategy','replication_factor':1};
USE optimizon;

CREATE TABLE product (
  product_id int PRIMARY KEY,
  name text,
  image text,
  link text,
  shares int,
  price decimal,
  is_prime boolean,
  in_stock boolean,
  giftwrap_available boolean,
  quantity_max int,
  seller text,
  protection_plan_exists boolean,
  protection_plan_name text,
  protection_plan_price decimal,
  protection_plan_years int,
  protection_plan_provider text,
  protection_plan_rating int,
  protection_plan_description text
);
