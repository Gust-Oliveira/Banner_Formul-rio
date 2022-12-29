function getBairro(){
    let url = document.getElementById('cep');
    if(url.value.length == 8){
        let json = new XMLHttpRequest();
        json.open('GET',`https://viacep.com.br/ws/${url.value}/json/`);
        json.onreadystatechange = () => {
            if(json.readyState == 4 && json.status == 200){

                let obj = json.responseText;
                let objJson = JSON.parse(obj);
                //document.getElementById("name").value = objJson.bairro;
                document.getElementById("bairro").value = objJson.bairro;

            }
        }
        json.send();
    }
}
const formataTelefone = (e) => {
  let input = e.target
  input.value = formatar(input.value)
}

const formatar = (valor) => {
  if (!valor) return ""
  valor = valor.replace(/\D/g,'')
  valor = valor.replace(/(\d{2})(\d)/,"($1) $2")
  valor = valor.replace(/(\d)(\d{4})$/,"$1-$2")
  return valor
}

const verificaEmail = (e) =>{
    let inputEmail = e.target.value;
    let dominio = inputEmail.substring(0, inputEmail.indexOf("@"));
    let extesao = inputEmail.substring(inputEmail.indexOf('@')+ 1, inputEmail.length);
    let erro =  document.getElementById("erro");
    

    if(!(dominio && dominio.length > 3 && extesao && extesao.endsWith('.com'))){
       erro.innerHTML = "Coleque um email válido";
       erro.classList.add("erro")
    }else{
        erro.innerHTML = "";
       erro.classList.remove("erro")
    }
}