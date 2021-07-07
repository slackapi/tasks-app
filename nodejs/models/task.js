const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Maybe:
    //const Task = sequelize.define('Task', { name: DataTypes.STRING });
    //Task.belongsToMany(User, { through: 'UserTasks' });
    static associate(models) {
      Task.belongsTo(models.User);
    }
  }
  Task.init({
    // Model attributes are defined here
    title: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['OPEN', 'CLOSED'],
      defaultValue: 'OPEN',
    },
    dueDate: DataTypes.DATE,
    scheduledMessageId: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
