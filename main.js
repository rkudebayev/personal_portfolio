let eventTarget = document.getElementById('heart');

const pressHeart = () => {
    eventTarget.style.color = "red";
}

eventTarget.onclick = pressHeart()
