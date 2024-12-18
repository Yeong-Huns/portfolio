## 📌 Tailwind 를 활용한 포트폴리오 제작

### 1.Tailwind CLI 생성

```bash
pnpm install -D tailwindcss
npx tailwindcss init 
```

> 📒 `tailwindcss` 설치 , `tailwind.config.js` 생성 

### 2. `tailwind.config.js` 템플릿 경로 지정

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

> 📒 `src` 폴더 및에 있는 `html, js` 파일 지정 

### 3. `input.css` 지정

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. CSS 파일 build 하기 

```bash
npx tailwind -i ./src/input.css -o ./src/output.css --watch
```

> 📒 적용한 tailwindcss 클래스들이 `output.css` 으로 변환된다. 

### 5. HTML 파일에서 Tailwind 사용하기 

```html 
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    안녕하세요
  </h1>
</body>
</html>
```
