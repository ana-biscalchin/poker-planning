CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE rooms (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE "table" (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id uuid REFERENCES rooms(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE votes (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  table_id uuid REFERENCES "table"(id) ON DELETE CASCADE,
  player_name text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);
