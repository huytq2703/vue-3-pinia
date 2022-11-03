<template>
    <div>
        <div class="grid">
            <div class="col-12">
                <div class="card">
                    <h5>DataTable</h5>
                    <InputText placeholder="Search" v-model="search" style="margin-bottom: 10px"></InputText>
                    <Button style="margin-left: 10px; margin-bottom: 10px" @click="search_button">Search</Button>

                    <!-- <DataTable v-model:selection="selectedProducts3" :value="products" :scrollable="true"
                        scrollHeight="400px" :loading="loading" 
                  
                        >
                      <Column header="check" > 
                        <template #body="{data}">
                            <Checkbox :value="data" id="checkOption1" name="option" v-model="checkboxValue"/>
                        </template> 
                        </Column>
                        <Column selectionMode="multiple" headerStyle="width: 3em" v-model="checkboxValue"></Column>
                        <Column field="id" header="id" style="min-width: 200px"> </Column>
                        <Column field="title" header="title" style="min-width: 200px"></Column>
                        <Column field="brand" header="brand" style="min-width: 200px"></Column>
                        <Column field="category" header="category" style="min-width: 200px"></Column>
                        <Column field="description" header="description" style="min-width: 200px"></Column>
                        <Column field="price" header="price" style="min-width: 200px"></Column>
                    </DataTable> -->

                    <DataTable :value="products" :paginator="true" :rows="10"
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[10, 20, 50]" responsiveLayout="scroll"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                        v-model:selection="selectedProducts3" :loading="loading">
                        <Column selectionMode="multiple" headerStyle="width: 3em" v-model="checkboxValue"></Column>

                        <Column field="id" header="id"></Column>
                        <Column header="Image">
                            <!-- <template #body="{data}">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="data.images[0]" class="product-image">
                        </template>  -->
                            <!-- <template #body="{slotProps}">
                            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image[0]" class="product-image" />
                        </template> -->
                            <template #body="{ data }">
                                <!-- <img :src="slotProps.data.image" :alt="slotProps.data.image" class="shadow-2" width="100" /> -->
                                <img :src="data.thumbnail" :alt="data.images[0]" class="product-image"
                                    style="height: 50px; width: 100px" />
                                <!-- <p>{{data.thumbnail}}</p> -->
                            </template>
                        </Column>
                        <Column field="title" header="title"></Column>
                        <Column field="brand" header="brand"></Column>
                        <Column field="category" header="category"></Column>
                        <Column field="description" header="description"></Column>
                        <Column field="price" header="price"></Column>
                        <template #paginatorstart>
                            <Button type="button" icon="pi pi-refresh" class="p-button-text"></Button>
                        </template>
                        <template #paginatorend>
                            <Button type="button" icon="pi pi-cloud" class="p-button-text"></Button>
                        </template>
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

// const checkboxValue = ref([])

const selectedProducts3 = ref();

const search = ref("");
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

const search_button = () => {
    productService.value.searchproduct(search.value).then((data) => {
        products.value = data.products;
        loading.value = false;
    });
};
const testconsole = () => {
    // console.log(checkboxValue.value)
    // console.log("hihoohoho")

    console.log(selectedProducts3.value);
};
</script>

<style lang="scss" scoped>
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
