            var currentSong = 0;
            var songList = $(".playlist li a").filter("[data-song*=song]");
            var i = 0;
            for(var i=0; i<songList.length; i++) {
              //console.log(songList[i]);
              songList.eq(i).attr("data-index", i);
            }
            


        function audioPlayer(){
            $(".playlist li a[data-song*=song]").eq(currentSong).parent("li").addClass("current-song");

            $("#audioPlayer")[0].src = songList.eq(currentSong).attr("href");
            $("#audioPlayer")[0].pause();

            $(".playlist li a[data-song*=song]").click(function(e){
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $(".playlist li").removeClass("current-song");
                currentSong = $(this).data("index");
                $(this).parent().addClass("current-song");
                //currentSong++;
            });
            
            $("#audioPlayer")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == songList.length) {
                  currentSong = 0;
                }
                $(".playlist li").removeClass("current-song");
                $(".playlist li a[data-song*=song]").eq(currentSong).parent("li").addClass("current-song");
                $("#audioPlayer")[0].src = songList.eq(currentSong).attr("href");
                $("#audioPlayer")[0].play();
                
            });
        }