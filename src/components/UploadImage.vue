<template>
  <div>
    <!-- <input type="text" :placeholder="field.crop"> -->
    <div class="flex flex-col cursor-pointer w-56">
      <label v-if="label" class="text-sm font-bold text-black mb-2 block"
        >{{ label }}<span v-if="required" class="text-red">*</span></label
      >
      <p class="text-sm mb-2 helper leading-snug" v-html="description"></p>
      <uploadcare
        :imagesOnly="true"
        :crop="cropOptions"
        :publicKey="'put-your-key-here'"
        Multiple="false"
        @success="onSuccess"
      >
        <div
          class="flex rounded-lg overflow-hidden min-h-12"
          :class="{ ' border-2 border-red ': errors.length }"
        >
          <div class="relative bg-gray-100 w-full" :class="{ 'h-56': !value }">
            <div
              class="absolute top-0 h-full w-full z-10 flex justify-center items-center"
            >
              <button
                v-if="value"
                @click.prevent="clear"
                title="Delete Image"
                class="cursor-pointer bg-white w-12 h-12 flex justify-center items-center rounded-sm shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <g
                    transform="matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)"
                  >
                    <path
                      d="M17.25,21H6.75a1.5,1.5,0,0,1-1.5-1.5V6h13.5V19.5A1.5,1.5,0,0,1,17.25,21Z"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M9.75 16.5L9.75 10.5"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M14.25 16.5L14.25 10.5"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M2.25 6L21.75 6"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M14.25,3H9.75a1.5,1.5,0,0,0-1.5,1.5V6h7.5V4.5A1.5,1.5,0,0,0,14.25,3Z"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                v-else
                class="cursor-pointer bg-white w-12 h-12 flex justify-center items-center rounded-sm shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <g
                    transform="matrix(0.8333333333333334,0,0,0.8333333333333334,0,0)"
                  >
                    <path
                      d="M0.75 12L23.25 12"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M12 0.75L12 23.25"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <img v-if="value" :src="value" alt="Image Uploaded" />
          </div>
        </div>
      </uploadcare>
      <div v-if="errors.length" class="text-red font-bold mt-1">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</template>
<script>
import Uploadcare from "uploadcare-vue";
export default {
  components: {
    Uploadcare,
  },
  props: {
    value: String,
    label: String,
    required: String,
    cropOptions: {
      type: String,
      default: () => "1080x1080 upscale",
    },
    description: String,
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      setValue: null,
    };
  },
  methods: {
    setInitialValue() {
      this.setValue = this.value || "";
    },
    fill(formData) {
      formData.append(this.field.attribute, this.setValue || "");
    },
    onSuccess(file) {
      this.$emit("input", file.cdnUrl);
      this.setValue = file.cdnUrl;
    },
    clear() {
      this.setValue = null;
    },
  },
};
</script>
