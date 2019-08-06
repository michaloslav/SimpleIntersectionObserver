exports.simpleIntersectionObserver = function(elements, callback, options = {}){
  elements = [...elements] // IE compatibility

  elements.forEach(function(target){
    var io = new IntersectionObserver(function(entries, observer){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var element = entry.target
  
          callback(element)
  
          observer.disconnect()
        }
      })
    }, options)

    io.observe(target)
  })
}