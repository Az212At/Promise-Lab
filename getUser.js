import { clearOutput, log, getUser } from "./utils.js"

const btn = document.getElementById("getUserBtn")

btn.addEventListener("click", () => {
    clearOutput()
    log("Загрузка пользователя...")

    getUser()
        .then(user => {
            log("Пользователь получен ✅")
            log(JSON.stringify(user))
        })
        .catch(error => {
            log(error)
        })
        .finally(() => {
            log("Запрос завершён")
        })
})
