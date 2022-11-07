import {ref, watch} from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore("User", ()=>{
    const user = ref({
        name:"admin",
        pass:"admin123",
    });
    const Chagename = (newname) =>{
        user.value.name = newname;
    }
    const getCarsSmall = () =>{
       return{
        "data": [
            {"todo": "Volkswagen", "check": true},
        
        ]
    }
    }
    watch(
        user,
        (UserVal)=>{
            localStorage.setItem("user", JSON.stringify(UserVal));
        },
        {
            deep:true
        }
    )
    return{
        user,
        Chagename,
        getCarsSmall
    }
}); 
