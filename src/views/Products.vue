<template>
  <section class="px-8">
    <div class="flex justify-between mb-2">
      <h1>Products</h1>
      <button
        @click="openCreateModal"
        class="bg-black text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white shadow-lg thumbnail"
      >
        <div class="relative">
          <div
            class="overlay absolute z-10 w-full h-full flex items-center justify-center"
          >
            <button @click="removeProduct(product.id)" class="btn">
              trash
            </button>
          </div>
          <img
            class="w-full"
            :src="product.image"
            :alt="'Image of a' + product.name"
          />
        </div>
        <div class="p-2">
          <h2 class="font-bold">{{ product.name }}</h2>
          <p>${{ product.price }}</p>
        </div>
      </div>
    </div>

    <!-- modal -->
    <main
      v-if="createModal"
      class="bg-black fixed z-20 top-0 left-0 w-screen h-screen bg-opacity-20 flex items-center justify-center"
    >
      <div class="bg-white p-8 rounded shadow-2xl w-96">
        <div class="flex justify-between items-center mb-8">
          <h2 class="font-bold text-2xl">Create Product</h2>
          <button @click="createModal = false" class="font-bold text-3xl">
            x
          </button>
        </div>

        <el-form label-position="top" label-width="100px" :model="form">
          <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="Price">
            <el-input type="number" v-model="form.price"></el-input>
          </el-form-item>

          <el-form-item label="Description">
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>

          <upload-image
            :description="'A profile photo of you, cropped at 3x2.'"
            cropOptions="3:2"
            label="Image of Product"
            required="true"
            v-model="form.image"
            class="mr-2"
          />

          <button @click="storeProduct()" class="btn">Create</button>
        </el-form>
      </div>
    </main>
  </section>
</template>
<script>
import { db } from "@/db";
import UploadImage from "@/components/UploadImage.vue";

export default {
  data: function () {
    return {
      form: {
        name: "Drinking Water",
        price: 2.99,
        description: "Real water fresh stuff",
        image: null,
      },
      createModal: false,
      products: [],
    };
  },
  components: {
    UploadImage,
  },
  methods: {
    // create
    openCreateModal() {
      this.form.name = null;
      this.form.price = null;
      this.form.description = null;
      this.form.image = null;
      // open the modal
      this.createModal = true;
    },
    // store
    storeProduct() {
      // store in firebase
      db.collection("products").add({
        name: this.form.name,
        price: this.form.price,
        description: this.form.description,
        image: this.form.image,
      });
      // close the modal
      this.createModal = false;
    },
    // edit
    // update
    // delete
    removeProduct(id) {
      db.collection("products").doc(id).delete();
    },
  },
  firestore: {
    products: db.collection("products"),
  },
};
</script>
<style scoped>
.thumbnail .overlay {
  opacity: 0;
}

.thumbnail:hover .overlay {
  opacity: 1;
}
</style>