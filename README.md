# Kalkulator kalorii

## Autorzy: 
* Kacper Barczyk 
* Maciej Zieliński 
* Marcin Żurawel 

## Projekt: 
**Aplikacja webowa** - kalkulator kalorii (Cal-Calc). Pozwala zalogowanemu użytkownikowi obliczyć dzienne spożycie kalorii. Użytkownik dodaje do tabeli spożyte w trakcie dnia produkty z dostępnej bazy produktów. Jest możliwość dodania produktów spoza dostepnej bazy. Aplikacja liczy sume kalorii z dodanych w danym dniu produktów. Użytkownik może grupować produkty w zestawy które będzie miał przypisane do swojego profilu, co ułatwi podliczanie kolorii posługując się zestawem zamiast pojedynczymi produktami.

## Technologie: 
* MongoDB
* Angular
* Express.js
* Node.js

## Bazy danych
Z uwagi na problemy implementacyjne zdecydowaliśmy się ograniczyć ilość kolekcji do dwóch. Dzięki utożsamieniu zestawów z produktami (z punktu widzenia bazy jest to ten sam obiekt)  zmniejszyła się liczba tabel, uzyskaliśmy lepszą funkcjonalność i bardziej przejrzysty kod aplikacji. 

### Struktura bazy danych MongoDB

Baza danych składa się z dwóch kolekcji:
* product - zawiera informację odnośnie produktów 

![bazydanych2](https://user-images.githubusercontent.com/72752781/122911431-95933480-d357-11eb-8a21-f4fbcfb0386c.PNG)

* user - zawiera informacje odnośnie użytkowników

![bazydanych1](https://user-images.githubusercontent.com/72752781/122911385-87ddaf00-d357-11eb-8139-d6f25d83ca12.PNG)

Przykładowe struktury elementów z kolekcji:
* Produkt, który nie jest zestawem (pole isSet = false)

![bazyjson1](https://user-images.githubusercontent.com/72752781/122911463-9f1c9c80-d357-11eb-812b-178e778b6763.PNG)


* Produkt, który jest zestawem (pole isSet = true)

![zestaw](https://user-images.githubusercontent.com/72752781/122914664-2ae3f800-d35b-11eb-8743-88d6cdac85e9.PNG)


* Użytkownik

![bazyjson2](https://user-images.githubusercontent.com/72752781/122911500-a774d780-d357-11eb-8316-2517ac60f720.PNG)

## API
Po uruchomieniu serwera zapytania API pozwalają na odczyt i manipulację danymi przechowanymi w bazie danych.
Serwer został napisany korzystając z frameworków Node.js oraz Express.js. Potrzebne do funkcjonowania aplikacji ścieżki zajmują się w folderze `server\routes`. Są podzielone na plik `auth.js` - ścieżki potrzebne do autentykacji użytkownika oraz `products.js` - ścieżki do wykonywania operacji CRUD na produktach oraz setach produktów. Do modelowania oraz operowania na dokumentach bazy danych użyliśmy biblioteki Mongoose. Potrzebne do tego modele, schematy oraz funkcje są umieszczone w `server\models` (pliki `product.js` oraz `user.js`).

| Akcja | Zapytanie | URL | Serwer |
------- | --------- | --- | ------ |
| Dodanie produktu do kolekcji | POST | http://localhost:4200/add | ![options](https://user-images.githubusercontent.com/72752781/122917687-92e80d80-d35e-11eb-9d37-bbf5a81774c3.PNG) |
| Wyświetlenie wszystkich produktów | GET | http://localhost:4200/products | ![get](https://user-images.githubusercontent.com/72752781/122917158-fb82ba80-d35d-11eb-9d62-b102ac500121.PNG) |
| Wyświetlenie danego produktu | GET | http://localhost:4200/products/:name | ![get](https://user-images.githubusercontent.com/72752781/122917158-fb82ba80-d35d-11eb-9d62-b102ac500121.PNG) |
| Usunięcie danego produktu | DELETE | http://localhost:4200/products/:name | ![delete](https://user-images.githubusercontent.com/72752781/122917729-a09d9300-d35e-11eb-96d9-617a54e5f643.PNG) |
| Logowanie użytkownika | POST | http://localhost:4200/user | ![post](https://user-images.githubusercontent.com/72752781/122917831-bd39cb00-d35e-11eb-8b3a-a40f79d0c47e.PNG) |

## Funkcjonalność
Po uruchomieniu aplikacji, użytkownikowi pokazuje się menu nawigacyjne wraz z panelem logowania (zdj 1) . Logowanie jest obligatoryjne, aby móc korzytsać z pałnej funkcjonalności aplikacji. Po udanym zalogowaniu/zarejestrowaniu użytkownik jest przenoszony do zakładki "Profil" (zdj 2), gdzie prezentowany jest widok jego zestawów. Dodatkowo może swobodnie poruszać się po panelu nawigacyjnym. Po wybraniu zakładki "Kalkulator" (zdj 3) pojawia się panel z listą produktów. Po kliknięciu na produkt są wyświetlane wartości odżywcze danego produktu (zdj 4). Ponadto jest możliwość dodania wybranego produktu do kalkulatora/zestawu/usunięcie produktu z bazy danych. Wraz z dodaniem produktów do klakulatora na biężąco aktualizuą się sumy wartości odżywczych (zdj 5). Przy tworzeniu zestawu należy go nazwać wpisując jego nazwę do opowiedniego pola (zdj 6). Dodakowo istnieje mechanizm wyszukiwania produktów oraz setów po nazwie (zdj 7) kategorii (zdj 8). Jeśli w bazie danych użytkownik nie może znalźć szukanego produktu, po kliknięciu w zakładkę "Dodaj produkt" może pożądany produkt dodać (zdj 9). Wpisując jego nazwę, kategorię oraz wartości odżywcze (Wprowadzane dane są poddane walidacji).

## Uruchamianie aplikacji
Aby uruchomić aplikację należy:
1) **Postawić serwer** - aby postawić serwer należy znajdować się w katalogu server (BazyDanychProjek -> server) oraz wprowadzić polecenie **node server**.
2) **Uruchomić frontend** - aby uruchomić frontend należy znajdować się w katalogu client (BazyDanychProjek -> client) oraz wprowadzić polecenie **npm start**
3) **Otworzenie strony** - aby otworzyć aplikacj webową Cal-Calc należy w przeglądarce wpisać **localhost:4200**

## Przykładowe widoki z aplikacji
- zdj 1

![zdj1](https://user-images.githubusercontent.com/72752781/122038676-26a56100-cdd6-11eb-9792-83f287995efe.PNG)

- zdj 2

![zdj2](https://user-images.githubusercontent.com/72752781/122038744-39b83100-cdd6-11eb-9caa-631e5d2d8b77.PNG)

- zdj 3

![zdj3](https://user-images.githubusercontent.com/72752781/122038838-4e94c480-cdd6-11eb-8e03-16755226c3ea.PNG)

- zdj 4

![zdj4](https://user-images.githubusercontent.com/72752781/122038855-548aa580-cdd6-11eb-8bde-c564ddb969dd.PNG)

- zdj 5

![zdj5](https://user-images.githubusercontent.com/72752781/122038870-59e7f000-cdd6-11eb-9a3b-863c47d06caa.PNG)

- zdj 6

![zdj6](https://user-images.githubusercontent.com/72752781/122038897-5f453a80-cdd6-11eb-9bb4-44ec6a8ce34f.PNG)

- zdj 7

![zdj7](https://user-images.githubusercontent.com/72752781/122038916-64a28500-cdd6-11eb-8d8b-1b7e3547ae40.PNG)

- zdj 8

![sety](https://user-images.githubusercontent.com/72752781/122915086-a5147c80-d35b-11eb-866f-8a249d24fe34.PNG)

- zdj 9

![zdj8](https://user-images.githubusercontent.com/72752781/122038924-69ffcf80-cdd6-11eb-93a6-e8b33cdcd220.PNG)
