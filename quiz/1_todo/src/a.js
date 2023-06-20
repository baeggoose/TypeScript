let arr =[
  {gender: 'male', name:'baeg'},
  {gender: 'female', name:'goo'},
  {gender: 'male', name:'se'},
]

let filtered = arr.filter(function(item){
  if(item.gender === 'female'){
    return item
  }
})
console.log(filtered);