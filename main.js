let eventTarget = document.getElementById('heart');

const pressHeart = () => {
    return eventTarget.style.backgroundColor = "red";
}

eventTarget.onclick = pressHeart()