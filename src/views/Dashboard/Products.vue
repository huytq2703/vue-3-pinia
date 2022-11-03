
<template>
	<div>
        <div class="card">
            <h5>Products</h5>
            <DataTable :value="customers2" v-model:selection="selectedProducts3" :scrollable="true" scrollHeight="500px" :loading="loading" scrollDirection="both" dataKey="id"  @rowSelect="onRowSelect"  @rowUnselect="onRowUnselect">
                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                <Column field="id" header="Id" footer="Id" style="width:100px"></Column>
                <Column field="title" header="title" footer="title" style="width:200px"></Column>
                <Column field="brand" header="brand" footer="brand" style="width:200px"></Column>
                <Column field="price" header="price" footer="price" style="width:200px"></Column>
                <Column field="category" header="category" footer="category" style="width:200px"></Column>
                <Column field="description" header="description" footer="description" style="width:200px"></Column>
            </DataTable>
        </div>
	</div>
</template>


<script setup>
    import { useProductStore } from '@/core/store/ProductStore';
    // import { storeToRefs } from 'pinia';
    import { ref, onMounted } from 'vue';

    const customers2 = ref();
    const loading = ref(false);
    const selectedProducts3 = ref();

    const productStore = useProductStore();
    // const { products } = storeToRefs(productStore);


    const onRowSelect = (event) => {
        console.log("Chon data", event.data);
    }

    const onRowUnselect = (event) => { 
        console.log("Bo chon data", event.data);
    }

    onMounted(() => {
        loading.value = true;
        productStore.getProducts().then( ()=>{
            customers2.value = productStore.products;
            loading.value = false;
        });
    })

   


</script>

<style scoped>

</style>