function testaFormulario(e){
   e.preventDefault();

   var telPattern = /[^0-9-() ]+/g

   if (telPattern.test(e.target.elements['tel'].value)) {
   //if( temLetras && temLetras.length) {
       alert('Apenas números são permitidos no campo telefone!')  
       return false
   }

   if(e.target.elements['tel'].value.replace(/[-() ]/g, '').length < 11){
       alert('Números inválido!')  
       return false
   }

   var pessoasRaw = localStorage.getItem('pessoas')
    if(pessoasRaw != null){
       var pessoas = JSON.parse(pessoasRaw)
   }else{
       var pessoas = [];
   }     
   
   if(id !==null){
       pessoas[id] = {
        name: e.target.elements['name'].value  ,
        tel:  e.target.elements['tel'].value ,
        exp:  (e.target.elements['exp'].value=='true')
        }

   } else {
       pessoas.push({
        name: e.target.elements['name'].value  ,
        tel:  e.target.elements['tel'].value ,
        exp:  (e.target.elements['exp'].value=='true')
   })
}
   localStorage.setItem('pessoas', JSON.stringify(pessoas))

   document.getElementById('goHome').click(); 
}
var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('person')
if(id !==null){
       var pessoasRaw = localStorage.getItem('pessoas')
    if(pessoasRaw != null){
       var pessoas = JSON.parse(pessoasRaw)
   }else{
       var pessoas = [];
   }     
   
   console.log(pessoas[id])
   document.getElementById('name').value = pessoas[id].name
   document.getElementById('tel').value = pessoas[id].tel
   if(pessoas[id].exp){
       document.getElementById('exp-yes').checked = true
   }else{
       document.getElementById('exp-no').checked = true
   }
}
function testaCampoTelefone(e){

   e.preventDefault()
   console.log(e)

   if(e.target.value.length == 0) {
       e.target.value += '('
   }
   if(e.target.value.length == 3) {
       e.target.value += ') '
   }
   if(e.target.value.length == 10) {
       e.target.value += '-'
   }

   if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
       e.target.value += e.key
   }
}
