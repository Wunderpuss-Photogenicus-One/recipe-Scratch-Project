const {pool} = require('pg');

const PG_URI = 'postgresql://postgres:recipedatabase12332@db.cpbbxzewqbhajlmdekdv.supabase.co:5432/postgres'

const pool = new Pool({
    connectionString: PG_URI
  });

  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };