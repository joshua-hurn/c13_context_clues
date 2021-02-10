document.addEventListener("DOMContentLoaded", function () {
    var friends = ['Bart', 'Homer', 'Lisa', 'Marge', 'Maggie'];
    var locations = ['bathroom', 'kitchen', 'foyer', 'dining room', 'office', 'library', 'sun room', 'shed', 'garden', 'driveway'];
    var weapons = ['mace', 'sword', 'candlestick', 'rope', 'club', 'laptop', 'icepick', 'saber', 'knife', 'bedpost', 'gun', 'rifle', 'trebuchet', 'cannon', 'laser', 'machine gun', 'bullet', 'fist', 'airplane', 'Earth'];

    for (var i = 0; i < 100; i++) {
        var newH3 = document.createElement("h3");
        newH3.textContent = `Accusation ${i}`;
        var alertFuncWithIndex = captureIndex(i);
        newH3.addEventListener("click", alertFuncWithIndex);
        document.body.appendChild(newH3);
    }

    function captureIndex(i) {
        return function () {
            alert(`Accusation ${i}: I accuse ${friends[i % 5]}, with the ${weapons[i % 20]} in the ${locations[i % 10]}!`);
        }
    }
});