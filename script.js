var day = new Date()
var year = day.getFullYear()
var month = day.getMonth() + 1
var date = day.getDate()
var week = day.getDay()

day.setMonth(day.getMonth() + 1)
day.setDate(1)
day.setDate(day.getDate() - 1)
var lastDate = day.getDate()
console.log(year)

if (week >= 2){
  for (var i=0;i<9-week;i++){
    if (date + i > lastDate){
      $("#movieTime").append(` <option value=${i}>${year}/${month+1}/${date+i - lastDate}</option> `)
    }else {
      $("#movieTime").append(` <option value=${i}>${year}/${month}/${date+i}</option> `)
    }
  }
}else {
  for (var i=0;i<2-week;i++){
    if (date + i > lastDate){
      $("#movieTime").append(` <option value=${i}>${year}/${month+1}/${date+i - lastDate} `)
    }else {
      $("#movieTime").append(` <option value=${i}>${year}/${month}/${date+i}</option> `)
    }
  }
}