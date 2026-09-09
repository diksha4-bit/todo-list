const todoList = [{
        name: 'Make Dinner',
        dueDate: '2024-06-10'},
        {
            name: 'Wash Dishes',
            dueDate: '2024-07-17'
        }];
    renderTodoList();

    function renderTodoList() {
        let todoListHTML = '';
        for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            const { name, dueDate } = todoObject;
            const HTML = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();"
                    class="js-delete-button">Delete</button>
            `;
            todoListHTML += HTML;
        }
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

    function addTodo() {
        const inputElement = document.querySelector('.js-text-input');
        const name = inputElement.value;
        const dateInputElement = document.querySelector('.js-date-input');
        const dueDate = dateInputElement.value;
        todoList.push({
            name, dueDate
        });
        inputElement.value = '';
        dateInputElement.value = '';
        renderTodoList();
    }

    
