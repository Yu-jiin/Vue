<template>
  <div>
    <button @click="showDiaryModal = true">새 일기 작성</button>
    <div v-if="showDiaryModal" class="modal">
      <div class="modal-content">
        <h3>일기 작성</h3>
        <input type="text" v-model="diaryTitle" placeholder="Title" />
        <textarea v-model="diaryContent" placeholder="Content"></textarea>
        <button @click="saveDiary">Save</button>
        <button @click="showDiaryModal = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useDiaryStore } from '@/stores/counter';


export default {
  setup() {
    const diaryStore = useDiaryStore();

    return {
      diaryTitle: diaryStore.diaryTitle,
      diaryContent: diaryStore.diaryContent,
      showDiaryModal: diaryStore.showDiaryModal,
      saveDiary: diaryStore.saveDiary,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}
</style>
