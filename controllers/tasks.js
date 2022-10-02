let tasks = [];

const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

const getTask = (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === Number(id));
  res.status(200).json(task);
};

const createTask = (req, res) => {
  const title = req.body.title;
  const task = { id: Date.now(), title };
  tasks.unshift(task);
  res.status(201).json({ msg: 'New task added', task });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === Number(id));
  task.title = req.body.title;
  res.status(200).json({ msg: 'Task updated' });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(task => task.id !== Number(id));
  res.status(200).json({ msg: 'Task deleted' });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
