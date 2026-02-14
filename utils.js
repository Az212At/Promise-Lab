export const output = document.getElementById("output")

export function log(message) {
    output.innerHTML += `<p>${message}</p>`
}

export function clearOutput() {
    output.innerHTML = ""
}

export function fakeRequest(data, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Ошибка запроса ❌")
            } else {
                resolve(data)
            }
        }, delay)
    })
}

export function getUser() {
    return fakeRequest({ id: 1, name: "Azat" }, 1500)
}

export function getPosts() {
    return fakeRequest(
        [
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ],
        2500
    )
}
