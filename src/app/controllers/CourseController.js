import Course from '../models/Course'


class CourseController {
    async store(req, res) {
        try {
            const { id, name, teacher, category, description, active } = await Course.create(req.body);

            return res.json({
                id,
                name,
                teacher,
                category,
                description,
                active,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar o curso' });
        }
    }
}


export default new CourseController();
