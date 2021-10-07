# Node.js & NPM

**Node.js** to środowisko w którym piszemy za pomocą JavaScriptu aplikacje uruchamiane poza przeglądarką internetową. Node nie ma dostępu do DOM.

Pobieramy instalator i instalujemy z uprawnieniami administratora.

**NPM** nie jest tłumaczony jako *node package manager* (chociaż nim jest). NPM oraz alternatywny YARN są to repozytoria z pakietami - paczkami. Po co nam one?

- dodajemy do projektów sporo gotowych bibliotek / narzędzi
- nie można polegać na konfiguracji edytora / jego wtyczkach
- uniwersalne źródło ze wszystkimi narzędziami
- dostęp do aktualizacji

Zainstalowane paczki lądują w folderze *node-modules*, którego nie wrzucamy do gita (plik *.gitignore*).

## Polecenia z linii komend

### Node

- `node -v` - sprawdzanie zainstalowanej wersji
- `node skrypt.js` - uruchamianie skryptu javascript poza przeglądarką

## NPM

- `npm init` - robimy raz przy zakładaniu świeżego projektu, jeśli pobieramy gotowy to może nie być nawet konieczne (jak np. przy WTF Gulp Starter Kit) - tworzy on plik *package.json*
- `npm init -y` - robi to samo co wyżej, bez pytania o parametry
- `npm install nazwa_paczki` - instalacja paczek (może być z dodatkowymi parametrami, jak `--save` czy `--save-dev`
- `npm install` - instaluje paczki, których lista zawarta jest w plikach projektu *package.json* oraz *package-lock.json* (który pilnuje zależności między paczkami, by były one pobrane w odpowiednich wersjach)

### Paczki / biblioteki / frameworki

- `moment` - formatuje czas ([momentjs.com](https://momentjs.com/))
- `angular` - Framework Angular ([angular.io](https://angular.io/))
- `react` - Framework React ([reactjs.org](https://reactjs.org/))
- `vue` - Framework Vue.js ([vuejs.org](https://vuejs.org/))

Przykład podpięcia bliblioteki w pliku JS:

```javascript
  const moment = require('moment');
```

## WTF Gulp Starter Kit

**Gulp** to jest tzw. taskmanager.

### Co zawiera Starter Kit?

- serwer lokalny z autoodświeżaniem
- wsparcie dla scss i sourcemap
- minifikacja
- webpack
- publikacja na github pages

### Polecenia

- `npm install gulp-cli --global` - jako administrator, tylko raz na cały system, na Windowsie w cmd: `npm install -g gulp-cli`
- `gulp` - uruchamianie gulpa
- `npm run deploy` - publikacja projektu przy użyciu *github pages* (na oddzielnej gałęzi)

## Linki

- [nodejs.org](https://nodejs.org/en/)
- [www.npmjs.com](https://www.npmjs.com/) oraz [yarnpkg.com](https://classic.yarnpkg.com/en/)
- [gulpjs.com](https://gulpjs.com/)
- [WTF Gulp Starter](https://github.com/maciejkorsan/wtf-gulp-starter) od *Macieja Korsana*
