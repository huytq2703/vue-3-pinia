<template>
    <div>
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>Todo List</h5>
                
                    <Button @click="delete_todo">Delete</Button>
             
                    <div class="card">
                        <DataTable :value="products" :scrollable="true" scrollHeight="400px" :loading="True" v-model:selection="selectedProducts3">
                            <Column selectionMode="multiple" headerStyle="width: 3em" v-model="checkboxValue"></Column>
                            <Column field="todo" header="todo" style="min-width: 200px"></Column>
                        </DataTable>
                    </div>
                    <div class="p-fluid formgrid grid">
                        <div class="field col-12 md:col-10">
                            <InputText placeholder="Chat" v-model="text_input" style="margin-bottom: 10px"></InputText>
                        </div>
                        <div class="field col-12 md:col-2">
                            <Button type="button" label="Add" icon="pi pi-send"  @click="add_todo"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useUserStore } from "@/core/store/example/todo";

const store = useUserStore();

const text_input = ref("");
const selectedProducts3 = ref();

const products = ref();

onMounted(() => {
    //     productService.value.getProductsSmall().then(data => products.value = data);
    products.value = store.todo_list;
    console.log(store.todo_list);
});

const delete_todo = () => {
    // console.log(checkboxValue.value)
    let list = []
    console.log(selectedProducts3.value)
    for ( let i in selectedProducts3.value){
        console.log(selectedProducts3.value[i].todo)
        
        list.push(selectedProducts3.value[i].todo)
        //  store.cong(selectedProducts3.value[i].todo)
    }
    console.log(list)
    store.cong(list)
    // console.log(selectedProducts3.value);
};
const add_todo = () =>{

    console.log(text_input.value)
    if(text_input.value !=""){
        store.add_todo(text_input.value)
        text_input.value=""
    }
   
}   
</script>

<style scoped>
.hi {
    height: 500px;
    background-color: rgb(209, 209, 209);
}
</style>
