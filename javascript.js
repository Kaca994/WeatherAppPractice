
        $("#button1").css('display',"none");
        $("#button2").css('display',"none");
        $('#cityName').on('blur', function(){
        
         var jsonString1='http://api.openweathermap.org/data/2.5/weather?q=';
         var jsonString2= $('#cityName').val();
         var jsonString3 = '&APPID=9e5ee3736796e84f40dfa29e5c83d805';
          
          
            $.getJSON(jsonString1+jsonString2+jsonString3, function(json){
                
            var name = json.name;
            var celzijusi  = (json.main.temp - 273.15).toFixed(2);
            var ferenhajti = (celzijusi * 1.8) + 32;  
            var desc = json.weather[0].description;  
            var vremeSad = new Date().toLocaleTimeString();
            var icon = json.weather[0].icon; 
            var slicica;
                
              switch(icon){
                case '01d':
                      slicica ="<img src='icons/summer.png'>";
                      break;
                case '02d':
                      slicica = "<img src='icons/014-cloudy.png'>";
                      break;
                case '03d':
                      slicica = "<img src='icons/014-cloudy.png'>";
                      break;
                case '04d':
                      slicica = "<img src='icons/014-cloudy.png'>";
                      break;
                case '09d':
                      slicica = "<img src='icons/012-rain-1.png'>";
                      break;
                case '10d':
                      slicica = "<img src='icons/019-rain.png'>";
                      break;
                case '11d':
                      slicica = "<img src='icons/018-storm.png'>";
                      break;
                case '13d':
                      slicica = "<img src='icons/017-snowing.png'>";
                      break;
                case '50d':
                      slicica = "<img src='icons/011-tornado.png'>";
                      break;
                case '01n':
                      slicica = "<img src='icons/006-night-1.png'>";
                      break;
                         }   
                
            $('#name').html(name);  
            $('#temp').html(slicica+" "+celzijusi+" °C");
            $('#desc').html(desc); 
            $('#vremeSad').html('Time now: '+vremeSad); 
            $('#label').css('display','none');
               
            $("#button1").css('display',"inline");
                
            $('#button1').on('click',function(){
                 $('#temp').html(slicica+" "+ferenhajti.toFixed(2)+" °F");
                $('#button1').css('display',"none");
                $('#button2').css('display',"inline");
            });
              
                $('#button2').on('click',function(){
                $('#temp').html(slicica+" "+celzijusi+" °C");
                $('#button2').css('display',"none");
                $('#button1').css('display',"inline");
            }); 

         });
             
     });
              