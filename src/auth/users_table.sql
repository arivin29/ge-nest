CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  nama VARCHAR(100),
  status VARCHAR(20) DEFAULT 'pending',
  wajib_reset_password BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
