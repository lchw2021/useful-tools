// general functions
function Get(url){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",url,false);
  Httpreq.send();
  return Httpreq.responseText;          
}
function genDate(freq,delay,reduct) {
  const date = new Date()
  const ms = 1000 * 60 * freq;
  const result = new Date(Math.round((date.getTime()-delay*60*1000)/ms)*ms+reduct*60*1000)
  return result;
}
function genStamp(date) {
  var [y,m,d,h,i] = [date.getFullYear(),placeHolder(date.getMonth()+1),placeHolder(date.getDate()),placeHolder(date.getHours()),placeHolder(date.getMinutes())]
  stamp = ([y,m,d,h,i]).join('')
  return stamp;
}
function genList(date) {
  var [y,m,d,h,i] = [date.getFullYear(),placeHolder(date.getMonth()+1),placeHolder(date.getDate()),placeHolder(date.getHours()),placeHolder(date.getMinutes())]
  list = [y,m,d,h,i]
  return list;
}
function placeHolder(i) {
  if (i < 10) {
    i = "0"+i
  }
  return i;
}

//opening functions
function load12A(){
  currentDate = new Date()
  url = 'https://rt.data.gov.hk/v1.1/transport/citybus-nwfb/eta/CTB/001087/12A'
  dict = JSON.loads(Get(url))
  dataTime = dict['generated_timestamp']
  [eta1,eta2,eta3] = [dict['data'][0]['eta'],dict['data'][1]['eta'],dict['data'][2]['eta']]
  [time1,time2,time3] = [Date.parse(eta1)-currentDate,Date.parse(eta2)-currentDate,Date.parse(eta3)-currentDate]
  min1 = Math.floor(time1/60000)
  sec1 = Math.floor(time1/1000) % 60
  stamp1 = min1.toString()+' min and '+sec1+' s'
  document.getElementById('test').innerHTML = stamp1
}
