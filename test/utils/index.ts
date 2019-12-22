const mongoose = require('mongoose');

export async function closeDb() {
  await mongoose.connection.close();
}

export async function dropDb() {
  await mongoose.connection.db.dropDatabase();
}
