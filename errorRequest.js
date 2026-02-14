import { clearOutput, log, fakeRequest } from "./utils.js"

const btn = document.getElementById("errorBtn")

btn.addEventListener("click", () => {
    clearOutput()
    log("Запуск запроса с ошибкой...")
    btn.disabled = true

    fakeRequest(null, 2000, true)
        .then(result => {
            log("Этот текст не появится, потому что запрос упал")
        })
        .catch(error => {
            log("Поймана ошибка: ❌ " + error)
        })
        .finally(() => {
            log("Запрос завершён (finally)")
            btn.disabled = false
        })
})
