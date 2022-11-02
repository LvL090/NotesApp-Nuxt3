<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      passwordVisible: false,
      eyeSvg: "eye-closed",
      fieldType: "text",
    };
  },
  props: {
    type: { type: String, default: "text" },
  },
  methods: {
    obfuscateToggle() {
      if (this.eyeSvg === "eye-closed") {
        this.eyeSvg = "eye";
      } else this.eyeSvg = "eye-closed";

      //You can simplify this by using this.fieldType = this.fieldType == "text" ? "password" : "text"
      if (this.fieldType == "password") {
        this.fieldType = "text";
      } else this.fieldType = "password";
    },
  },
  watch: {
    type(val) {
      this.fieldType = val;
    },
  },
  mounted() {
    this.fieldType = this.type;
  },
};
</script>

<template>
  <div>
    <input
      class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
      :type="fieldType"
      placeholder="Password"
    />
    <button @click="obfuscateToggle" class="ml-auto pl-sm _eye">
      <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
        <img :src="`/${eyeSvg}.svg`" alt="" />
      </div>
    </button>
  </div>
</template>
