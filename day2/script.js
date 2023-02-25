let searchbox = document.getElementById("searchbox")

searchbox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(`No match found with : ${searchbox.value}`)
    }
})