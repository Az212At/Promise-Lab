import { clearOutput, log, fakeRequest } from "./utils.js"

const btn = document.getElementById("raceBtn")

btn.addEventListener("click", () => {
    clearOutput()
    log("Запуск двух запросов на скорость (Promise.race)...")
    btn.disabled = true

    const slowRequest = fakeRequest("Медленный результат", 3000)

    const fastRequest = fakeRequest("Быстрый результат", 1500)

    Promise.race([slowRequest, fastRequest])
        .then(result => {
            log("Первый завершившийся запрос: ✅ " + result)
        })
        .catch(error => {
            log("Ошибка: " + error)
        })
        .finally(() => {
            btn.disabled = false
        })
})
