# Vue
- Vue 2문서 말구 Vue 3 문서로 들어가기


- Vue 기본 세팅
```
    const { createApp } = Vue

    const app = createApp ({
      setup() {
        const result = ~~~~
        result {
          result
        }
      }
    })

    app.mount('#app')
```

-  ref() : 반응형 상태를 선언하는 함수
  = reactive reference
![alt text](image-4.png)
![alt text](image-3.png)
![alt text](image-2.png)
![alt text](image-1.png)
![alt text](image.png)

***

![alt text](image-5.png)

***

```
 pip install django-environ
 <!-- settings.py에 설정 -->
import os
import environ

env = environ.Env(DEBUG=(bool, True))
environ.Env.read_env(env_file=os.path.join(BASE_DIR, '.env'))
API_KEY = env('API_KEY')
<!-- 그 전에 .env 파일은 만들자 -->
```
 1. API_KEY는 환경변수로 해