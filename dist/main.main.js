(()=>{"use strict";class t{constructor(t,n,e,o){this.dni=t,this.nombre=n,this.tfno=e,this.edad=o}}const n=document.getElementById("tablaUsuarios"),e=document.getElementById("insertarUsuario");var o=[];!async function(){try{const e=await async function(){try{const t="http://localhost:8000/api/usuarios",n=await fetch(t);if(!n.ok)throw console.log(n),new Error("No se pudo obtener la información de las categorias");return await n.json()}catch(t){console.error(t)}}();o=function(n){return n[1].forEach((n=>{let e=new t(n.dni,n.nombre,n.tfno,n.edad);o.push(e)})),o}(e),function(t){let e=[];t.forEach((function(t){e.push(t)})),e.forEach((function(t){let e=document.createElement("tr");e.innerHTML=`\n            <td>${t.dni}</td>\n            <td>${t.nombre}</td>\n            <td>${t.tfno}</td>\n            <td>${t.edad}</td>\n        `,n.appendChild(e)}))}(o)}catch(t){console.log(t)}}(),e.addEventListener("click",(function(){let n=document.getElementById("dniUsuario").value,e=document.getElementById("nombreUsuario").value,o=document.getElementById("tfnoUsuario").value,a=document.getElementById("edadUsuario").value;document.getElementById("mensaje"),async function(t){try{await async function(t){try{let n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};const e="http://localhost:8000/api/usuarios",o=await fetch(e,n);if(!o.ok)throw console.log(o),new Error("No se pudo obtener la información de las categorias");return await o.json()}catch(t){console.error(t)}}(t)}catch(t){console.log(t)}}(new t(n,e,o,a))}))})();