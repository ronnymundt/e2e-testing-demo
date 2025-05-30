# E2E Testing Demo 🧪📝

Eine kleine Angular 19 Demo-App mit einem Registrierungsformular,
die als Basis für End-to-End-Tests mit **Cypress** und **Playwright** dient. 
Ziel ist es, moderne E2E-Teststrategien mit Angular zu demonstrieren.

## 🛠️ Technologien

- Angular 19
- Angular Material
- Angular Router
- Cypress
- Playwright
- TypeScript

## ✨ Features

- Eingaben der Registrierung
- Routing zwischen Start- und Erfolgsseite
- UI-Komponenten mit Angular Material
- End-to-End-Tests mit Cypress und Playwright

## 🚀 Lokales Setup

```
git clone https://github.com/ronnymundt/e2e-testing-demo.git
cd e2e-testing-demo
npm install
ng serve
```
> 💡 `ng serve` muss im Hintergrund laufen, damit die Tests erfolgreich ausgeführt werden können.

## 🧪 E2E-Tests mit Cypress

### Cypress-Tests im Terminal ausführen

```
npx cypress run
```

### Cypress im UI-Modus starten

```
npx cypress open
```

> 💡 Cypress öffnet eine grafische Oberfläche, in der du Testfälle manuell starten und inspizieren kannst.

✅ Neu: Die Cypress-Tests wurden um visuelle Regressionstests mit @simonsmith/cypress-image-snapshot erweitert, um das UI-Layout per Screenshotvergleich automatisch zu prüfen.

## 🧪 E2E-Tests mit Playwright

### Playwright installieren

```
npx playwright install
```

### Playwright-Tests im Terminal ausführen

```
npx playwright test
```

### Playwright im UI-Modus starten

```
npx playwright test --ui
```

> 💡 Playwright bietet ein übersichtliches Test-Dashboard mit visueller Darstellung der Testschritte.

## 📄 Hinweise

Dieses Projekt dient als praktische Grundlage zum Erlernen und Vergleichen von **Cypress** und **Playwright** im Angular-Kontext. 
Die Tests sind bewusst einfach gehalten, um die Testwerkzeuge und das Setup möglichst klar und verständlich zu demonstrieren.

## 📸 Screenshot

![Screenshot](/src/assets/screencast.gif)
