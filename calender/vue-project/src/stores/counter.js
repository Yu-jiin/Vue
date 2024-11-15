import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useDiaryStore = defineStore('diary', () => {
  // 상태 정의
  const diaryTitle = ref('');
  const diaryContent = ref('');
  const selectedDate = ref('');
  const showDiaryModal = ref(false);

  // 일기 저장 함수
  const saveDiary = () => {
    const newDiary = {
      title: diaryTitle.value,
      content: diaryContent.value,
      date: selectedDate.value,
    };

    axios.post('http://localhost:8000/api/diaries/', newDiary)
      .then(response => {
        console.log('Diary saved:', response.data);
        // 성공적으로 저장된 후, 새로고침하거나 일기 목록을 업데이트하는 로직을 추가할 수 있습니다.
      })
      .catch(error => {
        console.error('Error saving diary:', error);
      });

    showDiaryModal.value = false;
  };

  // Pinia 스토어로 리턴할 값들
  return {
    diaryTitle,
    diaryContent,
    selectedDate,
    showDiaryModal,
    saveDiary,
  };
});
