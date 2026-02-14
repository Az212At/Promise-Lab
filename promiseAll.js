import { clearOutput, log, getUser, getPosts } from "./utils.js"

const btn = document.getElementById("getAllBtn")

btn.addEventListener("click", () => {
    clearOutput()

    const start = Date.now()
    log("Запуск двух запросов параллельно...")

    Promise.all([getUser(), getPosts()])
        .then(([user, posts]) => {
            const end = Date.now()
            const time = ((end - start) / 1000).toFixed(2)

            log("Оба запроса выполнены ✅")
            log("Пользователь: " + JSON.stringify(user))
            log("Посты: " + JSON.stringify(posts))
            log("Общее время: " + time + " сек")
        })
        .catch(error => {
            log("Ошибка: " + error)
        })
})
