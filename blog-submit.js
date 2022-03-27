let dataPage = [];

function blog(event) {
  event.preventDefault();

  let name = document.getElementById("Project-name").value;
  let description = document.getElementById("description").value;
  let start = document.getElementById("start-date").value;
  let end = document.getElementById("end-date").value;
  let image = document.getElementById("img-upload").files;

  // ==============Untuk checkbox==============

  let vue = document.getElementById("vue-js").checked;
  let react = document.getElementById("react-js").checked;
  let node = document.getElementById("node-js").checked;
  let javascript = document.getElementById("javaScript").checked;
  //===============Untuk date=======================
  let cardDuration = getDuration(start, end);
  //===========Logika checkbox==============
  if (vue) {
    vue = document.getElementById("vue-js").value;
  } else {
    (" ");
  }

  if (react) {
    react = document.getElementById("react-js").value;
  } else {
    (" ");
  }

  if (node) {
    node = document.getElementById("node-js").value;
  } else {
    (" ");
  }

  if (javascript) {
    javascript = document.getElementById("javaScript").value;
  } else {
    (" ");
  }

  //Menampilkan Gambar
  image = URL.createObjectURL(image[0]);

  let dataBlog = {
    nama: name,
    deskripsi: description,
    start: start,
    end: end,
    foto: image,
    vue: vue,
    react: react,
    node: node,
    script: javascript,
    durasi: cardDuration,
    element: `
      <div class="project-card">
      <img src="${image}" style="width: 100%; border-radius: 10px;"/>
          <div>
          <h4 class="judul">${name}</h4>
          <p class="type-page">Technologies</p>
          <p class="duration-time">${cardDuration}</p>
          </div>
          <a href="detail.html" style="cursor: pointer; color:black">
            <p class="slice-text">${description}....</p>
          </a>
    <div class="icon-page">
      <i class='${vue}' ></i>
      <i class='${react}' ></i>
      <i class='${node}' ></i>
      <i class='${javascript}' ></i>

       <div class="btn-page">
         <button class="btn-page-bottom">edit</button>
       <button class="btn-page-bottom">delete</button>
       </div>
    </div>
    </div>`,
  };

  console.log(dataPage);
  document.getElementById("card-list").innerHTML += dataBlog.element;
}

function getDuration(start, end) {
  let sdate = new Date(start);
  let edate = new Date(end);
  let duration = edate.getTime() - sdate.getTime();
  let month = Math.floor(duration / (1000 * 3600 * 24 * 30));
  let day = duration / (1000 * 3600 * 24);

  if (day < 30) {
    return day + " Hari";
  } else if (day > 30 && day <= 30) {
    return day + " Hari";
  } else if (month < 12) {
    return month + " Bulan";
  }
}
