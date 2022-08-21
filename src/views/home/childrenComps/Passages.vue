<template>
  <div class="passages">
    <passage v-for="item in passages" :passage="item" />
  </div>
</template>

<script>
import Passage from "./Passage.vue";

export default {
  components: {
    Passage,
  },
  props: {
    passages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.passages {
  margin-top: 10px;
}
</style>