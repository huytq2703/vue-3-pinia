<template>
    <div>
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>Todo List</h5>
                    <div class="card">
                            
                        <DataTable :value="products" :scrollable="true" scrollHeight="400px" :loading="True">
                         
                            <Column field="todo" header="todo" style="min-width:200px"></Column>
                            <Column field="check" header="check" style="min-width:200px"></Column>
                   
                        </DataTable>
                            </div>
                    <div class="p-fluid formgrid grid">

                     
                        <div class="field col-12 md:col-10">
                            <InputText placeholder="Chat" v-model="text_input" style="margin-bottom: 10px"></InputText>
                        </div>
                        <div class="field col-12 md:col-2">

                            <Button type="button" label="Send" icon="pi pi-send"></Button>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';


import  { useUserStore } from '@/core/store/example/todo';

const store = useUserStore()

const text_input = ref("")
const products = ref();

onMounted(() => {
        //     productService.value.getProductsSmall().then(data => products.value = data);
            products.value = store.getCarsSmall().data;
            console.log(store.getCarsSmall())
        })
</script>

<style scoped>
.hi {
    height: 500px;
    background-color: rgb(209, 209, 209);
}
</style>


