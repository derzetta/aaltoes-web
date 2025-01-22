-- Drop existing tables to reset the schema
DROP TABLE IF EXISTS votes;
DROP TABLE IF EXISTS restaurants;

-- Create restaurants table
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position_x FLOAT NOT NULL,
  position_y FLOAT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create votes table
CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  cookie_id VARCHAR(255) NOT NULL,
  is_like BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(restaurant_id, cookie_id)
);

-- Insert initial restaurants
INSERT INTO restaurants (id, name, position_x, position_y)
VALUES 
  (1, 'Istanbul Grilli', 20, 30),
  (2, 'Subway', 40, 60),
  (3, 'Hesburger', 60, 40),
  (4, 'Fafa''s', 80, 70),
  (5, 'Sodexo', 30, 80);

