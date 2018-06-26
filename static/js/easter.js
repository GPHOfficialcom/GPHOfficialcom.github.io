var displayPicClickCount = 0;
  $( document ).ready(function() {
      $("#displayPic").click(function(){
      displayPicClickCount++;
      if(displayPicClickCount == 5){
        $("body").append('<div id="particles-js"></div>');
        
        $("body link").appendTo("body");
        $("body script").appendTo("body");
        $("#easterSprites").appendTo('#particles-js');
        $('#displayPic').appendTo('#particles-js');
		$("#nyan").appendTo('body');

		$(this).addClass("image-spin");
        $("#wrap").remove();
        $("footer").remove();
        $("#particles-js").addClass("particles-js");
        startParticles();
        $("#easterSprites").css("display","initial");
        $("#nyan").get(0).play();  
      }else if(displayPicClickCount > 10){
      	if(displayPicClickCount % 2 == 0){
      		$("#nyan").get(0).pause();  
      	}else{
      		$("#nyan").get(0).play();  
      	}
      }
    });
  });


function startParticles(){
  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": false,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "star",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              },
              "image": {
                  "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 4,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 14,
              "direction": "left",
              "random": false,
              "straight": true,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 200,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
  });
 
}