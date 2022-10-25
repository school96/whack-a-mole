var mole1 = document.getElementById("mole1")
var mole2 = document.getElementById("mole2")
var mole3 = document.getElementById("mole3")
var mole4 = document.getElementById("mole4")
var mole5 = document.getElementById("mole5")
var mole6 = document.getElementById("mole6")
var mole1hidden = true
var mole2hidden = true
var mole3hidden = true
var mole4hidden = true
var mole5hidden = true
var mole6hidden = true
var timer = 45

var points = 0
function Randint(min, max) {
    return min + Math.round(Math.random() * (max - min))
}

mole1.ondragstart = function() {
    return false
}

mole2.ondragstart = function() {
    return false
}

mole3.ondragstart = function() {
    return false
}

mole4.ondragstart = function() {
    return false
}

mole5.ondragstart = function() {
    return false
}

mole6.ondragstart = function() {
    return false
}
// Mole 1
setInterval(function() {
    if (mole1hidden == true) {
        if (Randint(1, 2) == 2) {
            mole1hidden = false
            mole1.src = "mole-open.png"
        }
    } else {
        mole1hidden = true
        mole1.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole1.onclick = function() {
    if (mole1hidden == false) {
        mole1.src = "mole-closed.png"
        points += Randint(1, 8)
        mole1hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

// Mole 2
setInterval(function() {
    if (mole2hidden == true) {
        if (Randint(1, 2) == 2) {
            mole2hidden = false
            mole2.src = "mole-open.png"
        }
    } else {
        mole2hidden = true
        mole2.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole2.onclick = function() {
    if (mole2hidden == false) {
        mole2.src = "mole-closed.png"
        points += Randint(1, 8)
        mole2hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

// Mole 3
setInterval(function() {
    if (mole3hidden == true) {
        if (Randint(1, 2) == 2) {
            mole3hidden = false
            mole3.src = "mole-open.png"
        }
    } else {
        mole3hidden = true
        mole3.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole3.onclick = function() {
    if (mole3hidden == false) {
        mole3.src = "mole-closed.png"
        points += Randint(1, 8)
        mole3hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

// Mole 4
setInterval(function() {
    if (mole4hidden == true) {
        if (Randint(1, 2) == 2) {
            mole4hidden = false
            mole4.src = "mole-open.png"
        }
    } else {
        mole4hidden = true
        mole4.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole4.onclick = function() {
    if (mole4hidden == false) {
        mole4.src = "mole-closed.png"
        points += Randint(1, 8)
        mole4hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

// Mole 5
setInterval(function() {
    if (mole5hidden == true) {
        if (Randint(1, 2) == 2) {
            mole5hidden = false
            mole5.src = "mole-open.png"
        }
    } else {
        mole5hidden = true
        mole5.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole5.onclick = function() {
    if (mole5hidden == false) {
        mole5.src = "mole-closed.png"
        points += Randint(1, 8)
        mole5hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

// Mole 6
setInterval(function() {
    if (mole6hidden == true) {
        if (Randint(1, 2) == 2) {
            mole6hidden = false
            mole6.src = "mole-open.png"
        }
    } else {
        mole6hidden = true
        mole6.src = "mole-closed.png"
    }
}, Randint(3, 15) * 100)

mole6.onclick = function() {
    if (mole6hidden == false) {
        mole6.src = "mole-closed.png"
        points += Randint(1, 8)
        mole6hidden = true
        document.getElementById("main").style.backgroundColor = "darkgreen"
        setTimeout(function() {
            document.getElementById("main").style.backgroundColor = "lightgreen"
        }, 40)
    }
}

setInterval(function() {
    document.getElementById("sc").innerHTML = points
}, 10)

setInterval(function() {
    timer -= 1
    document.getElementById("t").innerHTML = timer
    if (timer == 0) {
        alert("Your score was " + points)
        window.location.href = window.location.href.replace("/game", "")
    }
}, 1000)