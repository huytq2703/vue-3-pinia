import {ref} from 'vue'
import { defineStore } from 'pinia'

// export const useUserStore = defineStore({
//     id:'counter',
//     state: () => ({
//         count : 10,
//         todo_list : ()=>{

//         }
//     }),
//     actions :  {
//         cong() {
//             this.count++
//         },
//         cong_tru() {
//             this.count--

//         }
//     }
// })
export const useUserStore = defineStore("User", ()=>{
    
    const user = ref({
        count:0,
    });
   
    const todo_list = ref(
         [
            // {"todo": "Volkswagen"},
            // {"todo": "hihi"},
            // {"todo": "hihi0"},
        ])
    ;
    const add_todo = (e)=>{
        let ref = { "todo": e};
        todo_list.value.push(ref);
     
        console.log(todo_list.value)
        // localStorage.setItem("todo", JSON.stringify(todo_list.value))
        // console.log(localStorage.todo)
    }
    const cong = (e) =>{
        console.log(e)
        for (let i in e){
            console.log(e[i])
            for (let j in todo_list.value){
                if (todo_list.value[j].todo == e[i]){
                        todo_list.value.splice(j,1);
                }
        }
        }
       
       
    }
    
   
    return{
        user,
        cong,
 
        todo_list,
        add_todo
    }
}); 
