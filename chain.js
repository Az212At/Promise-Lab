import { clearOutput, log, getUser, getPosts } from "./utils.js"

const btn = document.getElementById("chainBtn")

btn.addEventListener("click", () => {
    clearOutput()
    log("Запуск цепочки запросов...")
    btn.disabled = true

    getUser()
        .then(user => {
            log("Пользователь получен ✅")
            log(JSON.stringify(user))

            return getPosts()
        })
        .then(posts => {
            log("Посты получены ✅")
            log(JSON.stringify(posts))

            log(`Количество постов: ${posts.length}`)
        })
        .catch(error => {
            log("Ошибка в цепочке: ❌ " + error)
        })
        .finally(() => {
            log("Цепочка завершена")
            btn.disabled = false
        })
})
