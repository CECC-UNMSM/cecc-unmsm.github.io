import"./main-BH5aB4wm.js";const i="https://cecc-sintesis-default-rtdb.firebaseio.com",c=document.querySelector("#container-app");fetch(`${i}/sintesiss.json`).then(e=>e.json()).then(e=>{if(!e){c.innerHTML=`
        <div class="col-12 text-center text-muted">
          <p>No hay síntesis disponibles por ahora.</p>
        </div>
      `;return}let s=Array.isArray(e)?e:Object.values(e);s.reverse(),c.innerHTML="",s.forEach(o=>{const r=document.createElement("div");r.className="col-12 col-md-6 col-lg-4";const t=document.createElement("div");t.className="card h-100 shadow-sm";const n=document.createElement("div");n.className="card-body";const d=document.createElement("h5");d.className="card-title",d.textContent=o.tipo||"Sin título";const a=document.createElement("a");a.href=o.contenido||"#",a.className="btn btn-outline-primary btn-sm mt-2",a.textContent="Ver contenido",n.appendChild(d),n.appendChild(a);const l=document.createElement("div");l.className="card-footer text-muted small",l.textContent=`Fecha: ${o.titulo||"Sin fecha"}`,t.appendChild(n),t.appendChild(l),r.appendChild(t),c.appendChild(r)})}).catch(e=>{console.error("Error al cargar los datos:",e),c.innerHTML=`
      <div class="col-12 text-center text-danger">
        <p>Error al cargar las síntesis.</p>
      </div>
    `});
