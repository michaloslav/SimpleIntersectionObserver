# SimpleIntersectionObserver

This package makes lazy loading, animations and everything else you normally do with IntersectionObserver easier.

## Simple usage

```javascript
import simpleIntersectionObserver from 'SimpleIntersectionObserver'

simpleIntersectionObserver(document.getElementsByClassName('lazy'), element => {
  console.log(element, "is now visible!")
})
```

## Why you'd want to use this

Let's take a look at a simple lazy loading example using IntersectionObserver.

```javascript
const targets = document.getElementsByClassName("lazy")

targets.forEach(target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const element = entry.target

        const source = element.getAttribute("data-lazy-src")
        element.setAttribute("src", source)

        observer.disconnect()
      }
    })
  })

  io.observe(target)
})
```

That's a lot of code considering all we're really doing is asking to be notified when each element appears on the screen.
The only lines that actually need to be there are

```javascript
const targets = document.getElementsByClassName("lazy")
```

and 

```javascript
const source = element.getAttribute("data-lazy-src")
element.setAttribute("src", source)
```

Everything else is just annoying boilerplate that you have to deal with each and every time you use IntersectionObserver.

Let's rewrite that example using this package.

```javascript
simpleIntersectionObserver(document.getElementsByClassName('lazy'), element => {
  const source = element.getAttribute("data-lazy-src")
  element.setAttribute("src", source)
})
```

Voilà! Now we're only writing the code that really matters, avoiding the boilerplate.

## Passing options
You can pass options directly to IntersectionObserver as the 3rd argument

```javascript
simpleIntersectionObserver(elements, callback, {rootMargin: "20%", threshold: .1})
```

## Advanced IntersectionObserver usage
This package is meant for simple use cases. If you're doing something more complicated (eg. doing viewport calculations based on entries), this package isn't for you.