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
  url = 'https://rt.data.gov.hk/v1.1/transport/citybus-nwfb/eta/CTB/001087/12A'
  document.getElementById('test').innerHTML = Get(url)
}
