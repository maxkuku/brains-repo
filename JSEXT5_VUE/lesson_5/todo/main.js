let last_task_id = 1;
let last_proj_id = 3;

const genTaskID = () => last_task_id++
const genProjID = () => last_proj_id++


new Vue({
  el: "#app",
  data: {
    list: [],
    projects: [{id: 1, name: "покупки"}, {id: 2, name: "дела"}],
    title: "",
    select: {},
    filter: null,
    doneOnly: false
  },
  computed: {
    tasks() {

      if(this.filter == null) {
        if(!this.doneOnly) {
          return this.list
        }
        return this.list.filter((task) => !task.done)
      }
      if(!this.doneOnly) {
        return this.list.filter((task) => task.proj_id === this.filter.id)
      }
      return this.list.filter((task) => task.proj_id === this.filter.id && !task.done)
    }
  },  
  methods: {
    onAdd() {
      this.addTask(this.title, this.select.id)
    },
    addTask(title, pid) {
      this.list.push({id: genTaskID(), proj_id: pid, title: title, done: false})
    },
    addProject(title) {
      this.projects.push({id: genProjID(), title: title})
    },
    del(id) {
      const index = this.list.findIndex((task) => task.id == id);
      
      if(index >= 0) {
        this.list = this.list.splice(index - 1, 1)
      }
    },
    done(id) {
      const index = this.list.findIndex((task) => task.id == id);

      if(index >= 0) {
        this.list[index].done = !this.list[index].done
      }
    }
  }
})