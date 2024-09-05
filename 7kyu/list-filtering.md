function filter_list(l) {
  l.filter(e => {
    return if(typeof e === "number"){
      return true;
    }
  })
}
