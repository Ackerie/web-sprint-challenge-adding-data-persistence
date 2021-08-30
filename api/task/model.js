// build your `Task` model here

const db = require('../../data/dbConfig')
 
const convert = (bTfS) => {
        bTfS.task_completed = (bTfS.task_completed ? true: false)
        return task
    }

    const convertTo = (bToS) => {
     bToS.task_completed = (bToS.task_completed ? 1: 0)
     return task
    }

const getAll = () => {

    const task = db('task as t')
        .leftJoin('project as p', 't.project_id', 'p.project_id')
        .select('t.task_description', 't.task_notes','t.task_completed', 'p.project_name', 'p.project_description')

    return task.then((task) => {
   task.forEach(task => 
       convert(bTfS)
   )
   return task
}) }



const getById = (id) => {
    const task = db("tasks").where("task_id", id).first()

    return task.then( task => {
        return convertTo(bToS)
    }) 

}

const create = async (newTask) => {
    newTask = convertTo(newTask)
    const [id] = await db('tasks').insert(newTask)
    return getById(id)

}

module.exports = {
getById,
getAll,
create
}

