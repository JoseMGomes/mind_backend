import Sequelize, { Model } from "sequelize";

class Course extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                teacher: Sequelize.STRING,
                category: Sequelize.STRING,
                description: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                tableName: 'course',
            }
        );
        return this;
    }
}

export default Course;
