# *Visual Studio Code* i *WordPress*

Instalacja i konfiguracja *CodeSniffera* dla *WordPress* (*Windows*).

## 1. Globalna instalacja *Composera*

[Tutaj instrukcja](https://getcomposer.org/doc/00-intro.md#globally), jeśli wcześniej nie była już robiona.

## 2. Instalacja *CodeSniffera* i standardów *WordPress*

Za pomocą konsoli nawigujemy do miejsca, gdzie będziemy przechowywać standardy *WordPress'a* (w tym poradniku będzie to instalacja bezpośrednia na dysku `D:\` i do niej będę odwoływać się w całym tekście). Uruchamiamy komendę:

```console
composer create-project wp-coding-standards/wpcs --no-dev
```

Komenda ta odpowiada za:

- instalację standardów *WordPress* w katalogu `D:\wpcs`,
- instalację *PHP_CodeSniffer*,
- rejestrację standardów *WordPress* w konfiguracji *PHP_CodeSniffer*,
- udostępnia polecenie `phpcs` z katalogu `D:\wpcs\vendor\bin`.

### Dodanie zmiennej środowiskowej

Wchodzimy w edycję zmiennych środowiskowych (ja wyszukuję przez lupkę frazę *Edytuj zmienne środowiskowe systemu*) i edytujemy zmienną systemową `PATH` dodając do niej ścieżkę `D:\wpcs\vendor\bin`.

Teraz dla pewności możemy w konsoli wpisać:

```console
phpcs -i
```

jeśli otrzymamy zwrot o treści:

```console
The installed coding standards are PEAR, Zend, PSR2, MySource, Squiz, PSR1, PSR12, WordPress, WordPress-Extra, WordPress-Docs and WordPress-Core
```

to znaczy, że zależności zostały poprawnie dodane, w innym przypadku:

- jeśli polecenie `phpcs` nie jest rozpoznawane, to najpewniej popełniony został błąd przy dodawaniu ścieżki do zmiennych środowiskowych,
- jeśli zaś polecenie zostało wykonane, ale nie widać na tej liście *WordPress'a*, to uruchamiamy polecenie dodające standardy do ustawień (polecenie to nadpisuje aktualne ustawienia, więc wymieniamy w nim ścieżki do wszystkich standardów PHP z których zamierzamy korzystać):

```console
phpcs --config-set installed_paths /sciezka/do/WPCS, /sciezka/do/innych-standardow
```

przykładowo polecenie to może wyglądać tak:

```console
phpcs --config-set installed_paths D:/wpcs
```

i ponownie sprawdzamy za pomocą polecenia `phpcs -i`.

## 3. Rozszerzenia VS Code

Instalujemy [PHP Sniffer & Beautifier](https://marketplace.visualstudio.com/items?itemName=ValeryanM.vscode-phpsab) - narzędzie ułatwiające pracę ze snifferem kodu PHP. Następnie w piku konfiguracyjnym *VS Code*: `settings.json` dodajemy wartości:

```json
"phpsab.executablePathCBF": "D:/wpcs/vendor/bin/phpcbf.bat",
"phpsab.executablePathCS": "D:/wpcs/vendor/bin/phpcs.bat",
"phpsab.autoRulesetSearch": false,
"phpsab.standard": "WordPress",
"phpsab.snifferArguments": [
    "--ignore=*/wp-admin/*,*/wp-includes/*"
],
"[php]": {
    "editor.defaultFormatter": "valeryanm.vscode-phpsab"
}
```

Zapisujemy ustawienia i restartujemy *VS Code*.

Od tej pory kod będzie sprawdzany wg standardów *WordPress'a* i możemy go formatować za pomocą polecenia *Formatuj dokument* `Shift + ALt + F`.

### Dodatkowo

Niekonieczny, ale polecany dodatek do *VS Code* przy pracy z kodem PHP: [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) ale w [wersji PREMIUM](https://intelephense.com/) (15$ lifetime nie rujnuje budżetu) - dodatek ten posiada m.in. funkcję podpowiadanie składni czy szybki podgląd zależności, przenosi nas też do definicji kodu.
