import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export async function initializeDatabase() {
  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'users'
      );
    `);

    if (!result.rows[0].exists) {
      console.log('Creating tables...');
      await createTables();
    }
  } finally {
    client.release();
  }
}

async function createTables() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      avatar_url VARCHAR(255),
      level INT DEFAULT 1,
      experience INT DEFAULT 0,
      coins INT DEFAULT 1000,
      total_wagered BIGINT DEFAULT 0,
      total_won BIGINT DEFAULT 0,
      total_lost BIGINT DEFAULT 0,
      is_admin BOOLEAN DEFAULT FALSE,
      is_banned BOOLEAN DEFAULT FALSE,
      last_daily_bonus TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    `CREATE TABLE IF NOT EXISTS game_history (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      game_type VARCHAR(50) NOT NULL,
      bet_amount INT NOT NULL,
      win_amount INT NOT NULL,
      multiplier DECIMAL(10, 2) DEFAULT 1.0,
      result VARCHAR(20),
      seed VARCHAR(255),
      server_seed VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    `CREATE TABLE IF NOT EXISTS achievements (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      achievement_key VARCHAR(100) NOT NULL,
      unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, achievement_key)
    )`,

    `CREATE TABLE IF NOT EXISTS leaderboard (
      id SERIAL PRIMARY KEY,
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
      rank INT,
      total_wins INT DEFAULT 0,
      total_losses INT DEFAULT 0,
      net_profit BIGINT DEFAULT 0,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    `CREATE INDEX IF NOT EXISTS idx_game_history_user ON game_history(user_id)`,
    `CREATE INDEX IF NOT EXISTS idx_game_history_created ON game_history(created_at)`,
    `CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id)`
  ];

  const client = await pool.connect();
  try {
    for (const query of queries) {
      await client.query(query);
    }
    console.log('✅ All tables created successfully');
  } finally {
    client.release();
  }
}

export default pool;
