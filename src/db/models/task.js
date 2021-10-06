'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });
      this.ManyToMany(User, { through: 'Usertask', foreignKey: 'task_id' });
    }
  }
  task.init(
    {
      category_id: DataTypes.INTEGER,
      task: DataTypes.STRING,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
