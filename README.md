# Currency App

> Application for monitoring currencies from CBR (The Central Bank of Russian Federation) with an additional view for Euro.

## Installation
### Clone

- Clone this repo to your local machine using `https://github.com/ribelli/cbr_currency.git`

### Development server

```bash
ng serve
```

- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The app will automatically reload if you change any of the source files.

### Build Project

```bash
ng build
```
- The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

### Built With

* [Angular](https://github.com/angular/angular) - The web framework used


## Комментарии к текущей реализации
Реализацию передачи данных можно осуществить через подписку на Subject (RxJs) в сервисе, с дополнительным использованием метода interval для обновления данных каждые 10 секунд.
Переподключение к следующему источнику (при неработоспособности предыдущего), также, могло быть выполненно внутри CatchError (RxJS).
