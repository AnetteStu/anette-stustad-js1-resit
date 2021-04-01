let paragraphs = document.querySelectorAll("#reverse")

console.log(paragraphs)

var items = Array.prototype.slice.call(document.querySelectorAll("#reverse"));

items.forEach(function (item) {
    item.parentNode.insertBefore(item, item.parentNode.firstChild); 
});

// Reference for code https://gomakethings.com/how-to-reverse-a-linked-list-with-vanilla-js/ 