module.exports = function (sequelize, DataTypes) {
    const burger = sequelize.define('burger', {
        burger_name: {
         type: DataTypes.STRING,
         allowNull: false
        },    
        devoured: { 
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        // createdAt: {
        //     type: DataTypes.DATE(3),
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        //   },
        //   updatedAt: {
        //     type: DataTypes.DATE(3),
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        //   }
    });
    return burger;
}