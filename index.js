exports.simpleIntersectionObserver = function(elements, callback, options = {}){
  elements = [...elements] // IE compatibility

  elements.forEach(function(target){
    const io = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const element = entry.target
  
          callback(element)
  
          observer.disconnect()
        }
      })
    }, options)

    io.observe(target)
  })
}