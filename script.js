const items = document.querySelectorAll('.item')
const button = document.querySelectorAll('button')
const frontends = document.querySelectorAll('.frontend')
const seniors = document.querySelectorAll('.senior')
const juniors = document.querySelectorAll('.junior')
const backends = document.querySelectorAll('.backend')
const css = document.querySelectorAll('.css')
const javascript = document.querySelectorAll('.javascript')
const html = document.querySelectorAll('.html')
const fullstack = document.querySelectorAll('.fullstack')
const python = document.querySelectorAll('.python')
const react = document.querySelectorAll('.react')
const sass = document.querySelectorAll('.sass')

function doHideItem(classname, item) {
    let elems = item.querySelectorAll(classname);
    
    if (elems.length > 0) {
        // Il y a un front
        item.classList.remove("hidden");
    } else {
        // Il n'y a pas de front
        item.classList.add("hidden");
    }
}

frontends.forEach(function(elem) {
    elem.addEventListener("click", front);
});

function front(event) {
    items.forEach(function(item) {
        doHideItem('.frontend', item);
    });
}

seniors.forEach(function(elem) {
    elem.addEventListener("click", senior);
});

function senior(event) {
    items.forEach(function(item) {
        doHideItem('.senior', item);
    });
}

juniors.forEach(function(elem) {
    elem.addEventListener("click", junior);
});

function junior(event) {
    items.forEach(function(item) {
        doHideItem('.junior', item);
    });
}

backends.forEach(function(elem) {
    elem.addEventListener("click", backend);
});

function backend(event) {
    items.forEach(function(item) {
        doHideItem('.backend', item);
    });
}

css.forEach(function(elem) {
    elem.addEventListener("click", csss);
});

function csss (event) {
    items.forEach(function(item) {
        doHideItem('.css', item);
    });
}

javascript.forEach(function(elem) {
    elem.addEventListener("click", javascripts);
});

function javascripts(event) {
    items.forEach(function(item) {
        doHideItem('.javascript', item);
    });
}

html.forEach(function(elem) {
    elem.addEventListener("click", htmls);
});

function htmls(event) {
    items.forEach(function(item) {
        doHideItem('.html', item);
    });
}

fullstack.forEach(function(elem) {
    elem.addEventListener("click", fullstacks);
});

function fullstacks(event) {
    items.forEach(function(item) {
        doHideItem('.fullstack', item);
    });
}

python.forEach(function(elem) {
    elem.addEventListener("click", pythons);
});

function pythons(event) {
    items.forEach(function(item) {
        doHideItem('.python', item);
    });
}

sass.forEach(function(elem) {
    elem.addEventListener("click", sasss);
});

function sasss(event) {
    items.forEach(function(item) {
        doHideItem('.sass', item);
    });
}

react.forEach(function(elem) {
    elem.addEventListener("click", reacts);
});

function reacts(event) {
    items.forEach(function(item) {
        doHideItem('.react', item);
    });
}