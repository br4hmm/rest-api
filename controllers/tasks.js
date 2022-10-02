let tasks = [];

const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

const getTask = (req, res) => {
  const task = tasks.find(task => task.id === Number(req.params.id));
  res.status(200).json(task);
};

const createTask = (req, res) => {
  const task = { id: Date.now(), title: req.body.title };
  tasks.unshift(task);
  res.status(201).json({ msg: 'New task added' });
};

const updateTask = (req, res) => {
  const task = tasks.find(task => task.id === Number(req.params.id));
  task.title = req.body.title;
  res.status(200).json({ msg: 'Task updated' });
};

const deleteTask = (req, res) => {
  tasks = tasks.filter(task => task.id !== Number(req.params.id));
  res.status(200).json({ msg: 'Task deleted' });
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
