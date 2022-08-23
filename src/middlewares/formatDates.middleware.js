const formatDates = (request, response, next) => {

  request.body.startedDate = new Date(request.body.startedDate)
  request.body.endDate = new Date(request.body.endDate)
 
  console.log("request started date", request.body.startedDate)
  console.log("request end date", request.body.endDate)
  next()
}

module.exports = formatDates 