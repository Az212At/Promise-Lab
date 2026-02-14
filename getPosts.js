import { clearOutput, log, getPosts } from "./utils.js"

const btn = document.getElementById("getPostsBtn")

btn.addEventListener("click", () => {
    clearOutput()
    log("Загрузка постов...")
    btn.disabled = true

    getPosts()
        .then(posts => {
            log("Посты получены ✅")
            log(JSON.stringify(posts))
        })
        .catch(error => {
            log(error)
        })
        .finally(() => {
            btn.disabled = false
        })
})
