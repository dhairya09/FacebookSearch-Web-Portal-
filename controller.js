      var lat="";
      var lon="";

      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successFunction);
      } else {
          alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
      }


      function successFunction(position) {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          console.log('Your latitude is :'+lat+' and longitude is '+lon);
      }


      var app = angular.module('dpApp',  ['ngAnimate']);

      app.config(function($animateProvider) {
        $animateProvider.classNameFilter(/angular-animate/);
      })

      app.controller('dpCtrl', ['$scope', function($scope) {




    }]);

    app.controller('dpCtrl', function($scope, $http) {
      var type;
      var parameters;
      var config;
      var alb;
      var post;

      var i=-1;
      var fav_id;
      var fav_name;
      var fav_img;
      var fav_tab;
      var fav = {
        data:[]
      };
      //var data = [];



      var highresimg;

      var users;
      var pages;
      var events;
      var places;
      var groups;
      var favorites;

      var users_paging;
      var pages_paging;
      var events_paging;
      var places_paging;
      var groups_paging;

      var next_check;
      var prev_check;

      $scope.fav_disappear = true;
      $scope.dis1 = true;
      $scope.dis2 = true;
      $scope.dis3 = true;
      $scope.dis4 = true;
      $scope.dis5 = true;
      $scope.disappear1 = true;
      $scope.disappear2 = true;

      $scope.alb_dis = true;
      $scope.no_alb = true;
      $scope.no_pos = true;
      $scope.che_alb = true;
      $scope.che_pos = true;

      $scope.prog = true;
      $scope.prog1 = true;





      $scope.back =  function() { //switch lagse

        switch(type){
          case 'user': $scope.dis1 = false;

                       break;
          case 'page': $scope.dis2 = false;

                       break;

          case 'event': $scope.dis3 = false;

                       break;

          case 'place': $scope.dis4 = false;

                       break;

          case 'group': $scope.dis5 = false;

                       break;
        }

        switch(type){
          case 'user': $scope.paginginfo = users_paging;
                       if(users_paging){
                         next_check = $scope.paginginfo.next;
                         prev_check = $scope.paginginfo.previous;



                       }
                       break;
          case 'page': $scope.paginginfo = pages_paging;
                        if(pages_paging){
                          next_check = $scope.paginginfo.next;
                          prev_check = $scope.paginginfo.previous;
                        }
                       break;

          case 'event': $scope.paginginfo = events_paging;
                        if(events_paging){
                          next_check = $scope.paginginfo.next;
                          prev_check = $scope.paginginfo.previous;
                        }
                        break;

          case 'place': $scope.paginginfo = places_paging;
                        if(places_paging){
                          next_check = $scope.paginginfo.next;
                          prev_check = $scope.paginginfo.previous;
                        }
                        break;

          case 'group': $scope.paginginfo = groups_paging;
                        if(groups_paging){
                          next_check = $scope.paginginfo.next;
                          prev_check = $scope.paginginfo.previous;
                        }
                        break;
        }


        if(next_check == null){
          $scope.disappear1 = true;

        }
        else{
           $scope.disappear1 = false;
        }
        if(prev_check == null){

          $scope.disappear2 = true;

        }
        else{
           $scope.disappear2 = false;
        }


         $scope.disappear1 = false;
         $scope.disappear2 = false;

         //$scope.alb_dis = !$scope.alb_dis;
         $scope.alb_dis = true;
         //$scope.prog1 = !scope.prog1;

      };

      $scope.trash_daba = function(id,name,pic){

        localStorage.removeItem(id);
        $scope.fav_content = $scope.fav_lav();

        if(document.getElementById(id).style.color == "yellow"){
            document.getElementById(id).style.color = "black";
        }





      };

      $scope.fav_lav = function()
      {
        //alert("yo dude");
        var i=0;

        $scope.main=[];












        for (;sKey = window.localStorage.key(i); i++){
        console.log(window.localStorage.getItem(sKey));
        $scope.main.push(JSON.parse(window.localStorage.getItem(sKey)));













     }


      console.log($scope.main);

      return $scope.main;




      }

      $scope.star_bijupage = function(id){

        if(document.getElementById("babu").style.color == "yellow"){
            document.getElementById("babu").style.color = "black";
            document.getElementById(id).style.color = "black";
        }
        else{
            document.getElementById("babu").style.color = "yellow";
            document.getElementById(id).style.color = "yellow";
        }


      };





      $scope.star_daba = function(id,name,pic){




          fav_id = id;
          fav_name = name;
          fav_img = pic;
          fav_tab = type;




          //var x = document.getElementsByClassName("glyphicon-star-empty").style.color;
          //var y = document.getElementsByClassName("glyphicon glyphicon-star-empty").style.color;
          //document.getElementById(id).style.color = "yellow";
          if(document.getElementById(id).style.color == "yellow"){
              document.getElementById(id).style.color = "black";
          }
          else{
              document.getElementById(id).style.color = "yellow";
          }



          switch(fav_tab){

            case 'user': $scope.content1 = users;
                         break;
            case 'page': $scope.content2 = pages;
                         break;

            case 'event': $scope.content3 = events;
                          break;

            case 'place': $scope.content4 = places;
                          break;

            case 'group': $scope.content5 = groups;
                          break;


          }

          $scope.dat=[];
          $scope.favourites = {};
           $scope.dat.push ({
              "f_id": id,
              "f_name": name,
              "f_img": pic,
              "f_tab" : fav_tab

           });

          $scope.favourites.dat=$scope.dat;

          localStorage.setItem(id,JSON.stringify($scope.favourites));

          console.log(localStorage.getItem(id));

        };



      $scope.detail = function(id,name,img){


        $scope.nameche = name;
        $scope.imgurl = img;
        $scope.idchu = id;





        //$scope.disappear = !$scope.disappear;
        $scope.dis1 = true;
        $scope.dis2 = true;
        $scope.dis3 = true;
        $scope.dis4 = true;
        $scope.dis5 = true;
        $scope.disappear1 = true;
        $scope.disappear2 = true;
        $scope.fav_disappear = true;


          $scope.alb_dis = false;
          $scope.prog1 = false;


        //$scope.alb_dis = !$scope.alb_dis;




        //alert(document.getElementById(id).style.color);
        //alert(document.getElementById(id));

        //alert(document.getElementById("babu").style.color);


        if(document.getElementById(id).style.color == "yellow"){
            document.getElementById("babu").style.color = "yellow";
        }
        else{
            document.getElementById("babu").style.color = "black";
        }

        parameters = {

            "id" : id


        };

        config = {
            params: parameters
        };

        $http.get("make_req3.php", config)
        .then(function (response) {

          alb = response.data.albums;
          post = response.data.posts;


          $scope.no_alb = false;
          $scope.no_pos = false;
          $scope.che_alb = false;
          $scope.che_pos = false;






          if(alb == null){
              $scope.prog1 = true;
              $scope.che_alb = true;
              $scope.albu = "No Albums have been found";
          }
          else{
              $scope.prog1 = true;
              $scope.no_alb = true;
              $scope.albums = alb;

          }

          if(post == null){
              $scope.prog1 = true;
              $scope.che_pos = true;
              $scope.postu = "No Posts have been found";
          }
          else{
              $scope.prog1 = true;
              $scope.no_pos = true;
              $scope.posts =  post;

          }






          $scope.statuscode = response.status;
          $scope.statustext = response.statusText;
          //$scope.paginginfo = response;
        }, function (response) {
            $scope.albums = "Something sahi me wrong";
        });

      };



      $scope.Tabis = function(Tab_Type){
      //  alert(Tab_Type);
        type = Tab_Type;
      //  alert(type);
        //$scope.fav_disappear = true;
        /*$scope.disappear = false;
        $scope.disappear1 = false;
        $scope.disappear2 = false;*/

        $scope.style = {

              "background-color" : "#3B5998"
        };

        switch(type){
          case 'user': $scope.content1 = users;
                       if(users != null){
                         $scope.fav_disappear = true;
                         $scope.dis1 = false;
                         $scope.dis2 = true;
                         $scope.dis3 = true;
                         $scope.dis4 = true;
                         $scope.dis5 = true;



                         $scope.alb_dis = true;
                         $scope.no_alb = true;
                         $scope.no_pos = true;
                         $scope.che_alb = true;
                         $scope.che_pos = true;
                       }


                       break;
          case 'page': $scope.content2 = pages;
                        if(pages != null){
                          $scope.fav_disappear = true;
                          $scope.dis2 = false;
                          $scope.dis1 = true;

                          $scope.dis3 = true;
                          $scope.dis4 = true;
                          $scope.dis5 = true;

                          $scope.alb_dis = true;
                          $scope.no_alb = true;
                          $scope.no_pos = true;
                          $scope.che_alb = true;
                          $scope.che_pos = true;
                        }

                       break;

          case 'event': $scope.content3 = events;
                        if(events != null){
                          $scope.fav_disappear = true;
                          $scope.dis3 = false;
                          $scope.dis1 = true;
                          $scope.dis2 = true;

                          $scope.dis4 = true;
                          $scope.dis5 = true;


                          $scope.alb_dis = true;
                          $scope.no_alb = true;
                          $scope.no_pos = true;
                          $scope.che_alb = true;
                          $scope.che_pos = true;
                        }

                        break;

          case 'place': $scope.content4 = places;
                          if(places != null){
                            $scope.fav_disappear = true;
                            $scope.dis4 = false;
                            $scope.dis1 = true;
                            $scope.dis2 = true;
                            $scope.dis3 = true;

                            $scope.dis5 = true;

                            $scope.alb_dis = true;
                            $scope.no_alb = true;
                            $scope.no_pos = true;
                            $scope.che_alb = true;
                            $scope.che_pos = true;
                          }

                        break;

          case 'group': $scope.content5 = groups;
                          //alert(groups);
                        if(groups != null){

                          $scope.fav_disappear = true;
                          $scope.dis5 = false;
                          $scope.dis1 = true;
                          $scope.dis2 = true;
                          $scope.dis3 = true;
                          $scope.dis4 = true;


                          $scope.alb_dis = true;
                          $scope.no_alb = true;
                          $scope.no_pos = true;
                          $scope.che_alb = true;
                          $scope.che_pos = true;
                        }

                        break;

          case 'favorite':$scope.dis1 = true;
                          $scope.dis2 = true;
                          $scope.dis3 = true;
                          $scope.dis4 = true;
                          $scope.dis5 = true;
                          $scope.disappear1 = true;
                          $scope.disappear2 = true;


                          $scope.alb_dis = true;
                          $scope.no_alb = true;
                          $scope.no_pos = true;
                          $scope.che_alb = true;
                          $scope.che_pos = true;


                           favorites = $scope.fav_lav();

                           if(favorites != null){



                             $scope.fav_disappear = false;
                             $scope.fav_content = favorites;





                          }




         }

         switch(type){
           case 'user': $scope.paginginfo = users_paging;
                        if(users_paging){
                          next_check = $scope.paginginfo.next;
                          prev_check = $scope.paginginfo.previous;



                        }
                        break;
           case 'page':  $scope.paginginfo = pages_paging;
                         if(pages_paging){
                           next_check = $scope.paginginfo.next;
                           prev_check = $scope.paginginfo.previous;
                         }
                        break;

           case 'event': $scope.paginginfo = events_paging;
                         if(events_paging){
                           next_check = $scope.paginginfo.next;
                           prev_check = $scope.paginginfo.previous;
                         }
                         break;

           case 'place': $scope.paginginfo = places_paging;
                         if(places_paging){
                           next_check = $scope.paginginfo.next;
                           prev_check = $scope.paginginfo.previous;
                         }
                         break;

           case 'group': $scope.paginginfo = groups_paging;
                         if(groups_paging){
                           next_check = $scope.paginginfo.next;
                           prev_check = $scope.paginginfo.previous;
                         }
                         break;
         }


         if(next_check == null){
           $scope.disappear1 = true;

         }
         else{
            $scope.disappear1 = false;
         }
         if(prev_check == null){

           $scope.disappear2 = true;

         }
         else{
            $scope.disappear2 = false;
         }






      };

      $scope.clear = function() {
        $scope.fav_disappear = true;
        $scope.dis1 = true;
        $scope.dis2 = true;
        $scope.dis3 = true;
        $scope.dis4 = true;
        $scope.dis5 = true;
        $scope.disappear1 = true;
        $scope.disappear2 = true;

        $scope.alb_dis = true;
        $scope.no_alb = true;
        $scope.no_pos = true;
        $scope.che_alb = true;
        $scope.che_pos = true;

        $scope.prog = true;
        $scope.prog1 = true;
      };


      $scope.fun = function () {

        if($scope.search == null){
            alert("Please type a keyword");

        }

        $scope.prog = !$scope.prog;




        parameters = {

            "keyword" : $scope.search,
            "tab" : type,
             "lat" : lat,
             "lon" : lon



        };

        config = {
            params: parameters
        };

        $http.get("make_req3.php", config)
        .then(function (response) {

          $scope.prog = !$scope.prog;



          users = response.data[0].data;
          pages = response.data[1].data;
          events = response.data[2].data;
          places = response.data[3].data;
          groups = response.data[4].data;







          switch(type){
            case 'user': $scope.content1 = users;
                         if(users != null){
                            $scope.dis1 = false;
                         }

                         break;
            case 'page': $scope.content2 = pages;
                         if(pages != null){
                           $scope.dis2 = false;
                         }

                         break;

            case 'event': $scope.content3 = events;
                          if(events != null){
                              $scope.dis3 = false;
                          }

                          break;

            case 'place': $scope.content4 = places;
                          if(places != null){
                            $scope.dis4 = false;
                          }

                          break;

            case 'group': $scope.content5 = groups;
                          if(groups != null){
                              $scope.dis5 = false;
                          }

                          break;


          }



          $scope.statuscode = response.status;
          $scope.statustext = response.statusText;

          users_paging = response.data[0].paging;
          pages_paging = response.data[1].paging;
          events_paging = response.data[2].paging;
          places_paging = response.data[3].paging;
          groups_paging = response.data[4].paging;

          switch(type){
            case 'user': $scope.paginginfo = users_paging;
                         if(users_paging){
                           next_check = $scope.paginginfo.next;
                           prev_check = $scope.paginginfo.previous;
                         }
                         break;
            case 'page': $scope.paginginfo = pages_paging;
                          if(pages_paging){
                            next_check = $scope.paginginfo.next;
                            prev_check = $scope.paginginfo.previous;
                          }
                         break;

            case 'event': $scope.paginginfo = events_paging;
                          if(events_paging){
                            next_check = $scope.paginginfo.next;
                            prev_check = $scope.paginginfo.previous;
                          }
                          break;

            case 'place': $scope.paginginfo = places_paging;
                          if(places_paging){
                            next_check = $scope.paginginfo.next;
                            prev_check = $scope.paginginfo.previous;
                          }
                          break;

            case 'group': $scope.paginginfo = groups_paging;
                          if(groups_paging){
                            next_check = $scope.paginginfo.next;
                            prev_check = $scope.paginginfo.previous;
                          }
                          break;
          }


          $scope.disappear1 = false;
          $scope.disappear2 = false;
          $scope.fav_disappear = true;



          if(next_check == null){
            $scope.disappear1 = true;

          }
          if(prev_check == null){

            $scope.disappear2 = true;

          }




        }, function (response) {
            $scope.content = "Something went wrong";
        });

      };



      $scope.next = function(next_page){

        $scope.disappear1 = false;
        $scope.disappear2 = false;
        //alert(next_page);
        parameters = {

            "urlis" : next_page


        };

        config1 = {
            params: parameters
        };

        $http.get("make_req3.php",config1)
        .then( function (response){
            //var content = response.data.data;
            //alert(content);
            switch(type){
              case 'user':  users = response.data.data;
                            $scope.content1 = users;
                            break;
              case 'page':  pages = response.data.data;
                            $scope.content2 = pages;
                            break;



              case 'event': events = response.data.data;
                            $scope.content3 = events;
                            break;

              case 'place': places = response.data.data;
                            $scope.content4 = places;
                            break;

              case 'group': groups = response.data.data;
                            $scope.content5 = groups;
                            break;
            }



            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;


            switch(type){
              case 'user':  users_paging = response.data.paging;
                            $scope.paginginfo = users_paging;
                            if(users_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;
              case 'page':  pages_paging = response.data.paging;
                            $scope.paginginfo = pages_paging;
                            if(pages_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;



              case 'event': events_paging = response.data.paging;
                            $scope.paginginfo = events_paging;
                            if(events_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;

              case 'place': places_paging = response.data.paging;
                            $scope.paginginfo = places_paging;
                            if(places_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;

              case 'group': groups_paging = response.data.paging;
                            $scope.paginginfo = groups_paging;
                            if(groups_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;
            }




            if(next_check == null){
              $scope.disappear1 = true;

            }
            if(prev_check == null){

              $scope.disappear2 = true;

            }




        }, function (response){
            $scope.content = "Something went wrong";
        })

      };

      $scope.prev = function(prev_page){

        $scope.disappear1 = false;
        $scope.disappear2 = false;
        //alert(prev_page);
        parameters = {

            "urlche" : prev_page


        };

        config1 = {
            params: parameters
        };


        $http.get("make_req3.php",config1)
        .then( function (response){
            //var content = response.data.data;
            //alert(content);

            switch(type){
              case 'user':  users = response.data.data;
                            $scope.content1 = users;
                            break;
              case 'page':  pages = response.data.data;
                            $scope.content2 = pages;
                            break;



              case 'event': events = response.data.data;
                            $scope.content3 = events;
                            break;

              case 'place': places = response.data.data;
                            $scope.content4 = places;
                            break;

              case 'group': groups = response.data.data;
                            $scope.content5 = groups;
                            break;
            }
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;

            switch(type){
              case 'user':  users_paging = response.data.paging;
                            $scope.paginginfo = users_paging;
                            if(users_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;
              case 'page':  pages_paging = response.data.paging;
                            $scope.paginginfo = pages_paging;
                            if(pages_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;



              case 'event': events_paging = response.data.paging;
                            $scope.paginginfo = events_paging;
                            if(events_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;

              case 'place': places_paging = response.data.paging;
                            $scope.paginginfo = places_paging;
                            if(places_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;

              case 'group': groups_paging = response.data.paging;
                            $scope.paginginfo = groups_paging;
                            if(groups_paging){
                              next_check = $scope.paginginfo.next;
                              prev_check = $scope.paginginfo.previous;
                            }
                            break;
            }




            if(next_check == null){
              $scope.disappear1 = true;

            }
            if(prev_check == null){

              $scope.disappear2 = true;

            }


        }, function (response){
            $scope.content = "Something went wrong";
        })

      };

      $scope.fbpos = function(name,img) {



          FB.ui({

                method: 'feed',
                link: 'VP4.html',
                picture: img,
                name: name,
                caption: 'FB SEARCH FROM USC CSCI571',
                display: 'popup'
                }, function(response){
                if (response && !response.error_message){
                  alert("Posted Successfully");
                }
                else{
                  alert("Not Posted");
                }


            });




      };




    });
