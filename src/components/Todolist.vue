<template>
  <div class="todolist">
    <div class="todo_input_border">
      <input class="todo_input" type="text" v-model="editingItem" placeholder="告诉我你想做什么" @keyup.enter="addTodo">
    </div>
    <span v-if="emptyText != ''">{{emptyText}}</span>
    <!-- <table class="todo-list-table">
      <tbody>
        <tr v-for="(todo, index) in todolist" :key="todo">
          <div class="todo_item">
            <span>{{index + 1}} {{todo.todo}}</span>
            <button @click="finishTodo(index)" v-bind:class="{'todo_item_btn_finish' :todo.finished, 'todo_item_btn' : !todo.finished}">{{todo.finished ? "忘掉它" : "完成了"}} </button>
          </div>
        </tr>
      </tbody>
    </table> -->
    <div class="todo-list-table">
      <transition-group name="fade">
        <div v-for="(todo, index) in todolist" :key="todo">
          <div class="todo_item">
            <span>{{index + 1}} {{todo.todo}}</span>
            <button @click="finishTodo(index)" v-bind:class="{'todo_item_btn_finish' :todo.finished, 'todo_item_btn' : !todo.finished}">{{todo.finished ? "忘掉它" : "完成了"}} </button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      emptyText: "快来给自己制定计划吧",
      editingItem: "",
      todolist: []
    };
  },
  mounted: function () {
    var localTodo = localStorage.getItem("todoList");
    this.todolist = JSON.parse(localTodo);
  },
  methods: {
    addTodo: function () {
      if (this.editingItem == "") {
        return;
      }
      this.todolist.push({ todo: this.editingItem, finished: false });
      this.editingItem = "";
      this.emptyText = "";

      this.saveTodo();
    },
    finishTodo: function (index) {
      if (this.todolist[index].finished == false) {
        this.todolist[index].finished = true;
      } else {
        this.todolist.splice(index, 1);
      }
      if (this.todolist.length == 0) {
        this.emptyText = "太好了，您的计划都完成了！";
      }

      this.saveTodo();
    },
    saveTodo: function () {
      localStorage.setItem("todoList", JSON.stringify(this.todolist));
    }
  }
};
</script>

<style scoped>
.todolist {
  width: 800px;
  margin: 0 auto;
}

.todo_input_border {
  height: 40px;
  width: 400px;
  margin: 40px auto;
  border-style: solid;
  border-width: 2px;
  border-color: #aaaaaa;
  border-radius: 21px;
}

.todo_input {
  background-color: transparent;
  outline: none;
  width: 360px;
  height: 40px;
  border: none;
  font-size: 20px;
}

.todo_item {
  width: 400px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}

.todo_item_btn {
  width: 60px;
  height: 30px;
  color: white;
  background-color: green;
  outline: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.todo_item_btn_finish {
  width: 60px;
  height: 30px;
  color: white;
  background-color: gray;
  outline: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.todo-list-table {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
