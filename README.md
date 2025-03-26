
![img-2](https://github.com/user-attachments/assets/e2244bbb-b2bc-4b3f-8798-e9ca3ce6fbbd)
# 📱 React ![img-1](https://github.com/user-attachments/assets/1d95a528-7df4-452c-9ac6-1659de2fada0)
Native Application

## 🚀 Inicialización del Proyecto

Para ejecutar la aplicación en tu entorno de desarrollo, utiliza los siguientes comandos:

### 📌 Requisitos Previos
Antes de comenzar, asegúrate de tener instalados:
- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (para emuladores y herramientas de compilación de Android)
- Xcode (para desarrollo en iOS)

### 📌 Instalación de Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```sh
npm install
```

### 📌 Ejecutar la Aplicación
#### Para Android:
```sh
npm run android
```

#### Para iOS:
```sh
npm run ios
```
*(Asegúrate de ejecutar `npx pod-install` en `ios/` si estás desarrollando en macOS.)*

#### Iniciar el Servidor Metro:
```sh
npm run start
```

#### Ejecutar Pruebas:
```sh
npm run test
```

#### Analizar Código con ESLint:
```sh
npm run lint
```

---

## 📂 Estructura Principal del Proyecto
El archivo principal de la aplicación es `App.tsx`, ubicado en la raíz del proyecto. Este archivo es el punto de entrada de la aplicación y tiene la siguiente estructura:

```tsx
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigators/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator/>
    </ThemeProvider>
  );
};

export default App;
```

### 📌 Explicación:
- **`ThemeProvider`**: Proporciona un contexto de tema global a la aplicación.
- **`AppNavigator`**: Maneja la navegación de la aplicación.

---

## 📦 Generar el APK de la Aplicación
Para generar un APK de la aplicación en modo `debug`, sigue estos pasos:

### 📌 Paso 1: Crear la Carpeta de Assets
Ejecuta el siguiente comando en la terminal:
```sh
mkdir -p android/app/src/main/assets
```

### 📌 Paso 2: Generar el Bundle de JavaScript
```sh
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

### 📌 Paso 3: Compilar el APK
```sh
cd android && ./gradlew assembleDebug
```

Después de completar estos pasos, el APK generado estará disponible en:
```
android/app/build/outputs/apk/debug/app-debug.apk
```
Puedes instalarlo en un dispositivo físico o emulador ejecutando:
```sh
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

Para generar un APK en `release`, deberás firmar la aplicación antes de compilarla.

---

## 📞 Soporte
Si tienes preguntas o problemas, dejame un mensaje al correo andersonyepesbedoya@gmail.com que estare atento a responderlo....
