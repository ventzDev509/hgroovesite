
// *************************bacdrop bg detection***********************
export  function addBgR() {
       
    var img = document.querySelector(".getColor-res");
    let getImg = document.querySelectorAll(".getColor-res");
    function detectColors(imagePath, numColors, opacity) {
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
  
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
  
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        var pixelCount = imageData.length / 40; // 4 components: red, green, blue, and alpha
  
        var colorMap = {};
  
        // Iterate through each pixel
        for (var i = 0; i < pixelCount; i++) {
          var r = imageData[i * 4];
          var g = imageData[i * 4 + 1];
          var b = imageData[i * 4 + 2];
          if (
            (r === 255 && g === 255 && b === 255) ||
            (r === 223 && g === 223 && b === 233)
          ) {
            continue;
          }
          if (r === 0 && g === 0 && b === 0) {
            r = 36;
            g = 35;
            b = 35;
          }
          var rgb = r + "," + g + "," + b;
  
          if (rgb in colorMap) {
            colorMap[rgb]++;
          } else {
            colorMap[rgb] = 1;
          }
        }
  
        // Sort colors by frequency
        var colors = Object.keys(colorMap).sort(function (a, b) {
          return colorMap[b] - colorMap[a];
        });
  
        // Get the dominant colors
        colors = colors.slice(0, numColors);
  
        // Set the background color of the div
        if (colors.length > 0) {
          let div = document.querySelectorAll(".item-bg-res-playing");
          let color_=document.querySelectorAll('.color-item')
          color_.forEach(e=>{
            e.style.color="rgba(" + colors[0] + "," + opacity + ")"
          })
          div.forEach((element) => {
            element.style.background = "rgba(" + colors[0] + "," + opacity + ")";
            element.style.transition=`.3s ease-in-out all`
          });
        }
      };
  
      img.src = imagePath;
    }
    getImg.forEach((item) => {
      let source = item.getAttribute("src");

      if (source != "") {
        detectColors(source, 3, 1);

      }
    });
  }
  
  
  