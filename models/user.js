const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hash = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hash);
    }
  }
}, {
  tableName: 'users',
  timestamps: true
});

User.prototype.generateAuthToken = function() {
  return jwt.sign(
    { 
      id: this.id,
      username: this.username,
      email: this.email
    },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1h' }
  );
};

User.prototype.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;