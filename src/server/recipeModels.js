const {Pool} = require('pg');

const PG_URI = 'postgresql://postgres.cpbbxzewqbhajlmdekdv:recipedatabase12332@aws-0-us-west-1.pooler.supabase.com:6543/postgres'

const pool = new Pool({
    connectionString: PG_URI,
    // ssl: {
    //   rejectUnauthorized: false,  // added this for SSL connection- not sure what that means but should help
    // },
  });

  async function testConnection() { // test for the connection to the database i found online; seems to be working properly
    try {
      const res = await pool.query('SELECT NOW()'); // Running a basic query to test the connection
      console.log('Connected to the database:', res.rows);
    } catch (err) {
      console.error('Database connection error:', err.stack);
    }
  }
  
  testConnection();

  module.exports = {
    query: (text, params, callback) => {
      console.log('Executed query', text);
      return pool.query(text, params, callback);
    }
  };