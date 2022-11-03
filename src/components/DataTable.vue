<template>
    <div>
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5 >DataTable</h5>
                    <InputText placeholder="Search" v-model="search"></InputText>
                    <Button style="margin-left: 10px;" @click="search_button">Search</Button>
                    <DataTable :value="products" :scrollable="true" scrollHeight="400px" :loading="loading">
                        <Column header="check" > 
                        <template #body="{data}">
                            <Checkbox :value="data" id="checkOption1" name="option" v-model="checkboxValue"/>
                        </template> 
                    </Column>
                        <Column field="id" header="id" style="min-width: 200px">
                        </Column>
                        <Column field="title" header="title" style="min-width: 200px"></Column>
                        <Column field="brand" header="brand" style="min-width: 200px"></Column>
                        <Column field="category" header="category" style="min-width: 200px"></Column>
                        <Column field="description" header="description" style="min-width: 200px"></Column>
                        <Column field="price" header="price" style="min-width: 200px"></Column>
                      
                    </DataTable>
                </div>
               <Button @click="testconsole">Console log</Button>
            </div>
        </div>
        <h1>hii</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductService from "@/core/store/serve";


const checkboxValue = ref([])

const search = ref("")
const loading = ref(false);
const products = ref();
const productService = ref(new ProductService());
onMounted(() => {
    loading.value = true;
    //     productService.value.getProductsSmall().then(data => products.value = data);
    productService.value.getProductsSmall().then((data) => {
        products.value = data.products;
        loading.value = false;
    });

    // console.log(productService.value.getProductsSmall());
});

const search_button = ()=>{
    productService.value.searchproduct(search.value).then((data) => {
        products.value = data.products;
        loading.value = false;
    });
}
const testconsole = ()=>{
    console.log(checkboxValue.value)
}
</script>

<style lang="scss" scoped>
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
    
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
