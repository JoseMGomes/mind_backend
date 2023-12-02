import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
        },
        {
            sequelize,
        }
        );
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);   //Criptografar a senha
            }
        });

        return this;
    }

    static associate(models) {                  //criar relacionamento
        this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar'});
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);  //Checar a senha
    }
}

export default User;



