chrome.contextMenus.create({
  title: "Guardar imagen como PNG",
  contexts:["image"],
  onclick: function(info, tab) {
    var url = info.srcUrl;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var fileType = 'image/png';
      var blob = new Blob([xhr.response], {type: fileType});
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = '';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      delete a;
    };
    xhr.open('GET', url);
    xhr.send();
  }
});