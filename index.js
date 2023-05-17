const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      this.print(i);
    }
  },

  add: function (text) {
    this.items.unshift({ text, completed: true });
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    const item = this.items[index];

    console.log(`${item.completed ? `[x] ${item.text}` : `[ ] ${item.text}`}`);
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};

todoList.add("Перети к слудующему разделу");

todoList.complete(2);

todoList.printAll();
