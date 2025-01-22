-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position_x FLOAT NOT NULL,
  position_y FLOAT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create votes table
CREATE TABLE IF NOT EXISTS votes (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurants(id),
  cookie_id VARCHAR(255) NOT NULL,
  is_like BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(restaurant_id, cookie_id)
);

-- Insert initial restaurants if they don't exist
INSERT INTO restaurants (id, name, position_x, position_y)
VALUES 
  (1, 'Istanbul Grilli', 0.2, 0.3),
  (2, 'Subway', 0.4, 0.6),
  (3, 'Hesburger', 0.6, 0.4),
  (4, 'Fafa''s', 0.8, 0.7),
  (5, 'Sodexo', 0.3, 0.8)
ON CONFLICT (id) DO NOTHING;

