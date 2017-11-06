<?php
require_once __DIR__ . '/php-graph-sdk-5.0.0/php-graph-sdk-5.0.0/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
'app_id' => '1753341921646015',
'app_secret' => '4c6e2e9dc627403ec3936f2319543481',
'default_graph_version' => 'v2.8',
 ]);

 $keyword = null;
 $tab = null;
 $next = null;
 $prev = null;
 $id = null;
 $highres = null;
 $lan = null;
 $lon = null;

 if(isset($_GET["keyword"])){
   $keyword = $_GET["keyword"];
 }
 else{
  $keyword = null;
 }

 if(isset($_GET["id"])){
   $id = $_GET["id"];
 }
 else{
  $id = null;
 }


 if(isset($_GET["tab"])){
   $tab = $_GET["tab"];
 }
 else{
  $tab = null;
 }

 if(isset($_GET["urlis"])){
   $next = $_GET["urlis"];
 }
 else{
   $next = null;
 }

 if(isset($_GET["urlche"])){
   $prev = $_GET["urlche"];
 }
 else{
   $prev = null;
 }

 if(isset($_GET["lat"])){
   $lat = $_GET["lat"];
 }
 else{
   $lat = null;
 }

 if(isset($_GET["lon"])){
   $lon = $_GET["lon"];
 }
 else{
   $lon = null;
 }

 if(isset($_GET["high_res_id"])){
   $highres = $_GET["high_res_id"];
 }
 else{
   $highres = null;
 }

//var_dump($keyword);

//var_dump($tab);



//var_dump($next_prev_url);

$access_token = "EAAY6p7po1b8BAPqJZCGlIDzQhuZAkwmgZBTFhgfEKOEVOjAjIlxKTfFIHI8lJ1XvMFMP1T1Uxf70wMWZBmcXQwt3nYR60QCi0KrZC5fMjohU45rqfaeW37fvaGNZAYZCOpXj0ZB5h4L1cx4xEbjkY1HLBZCwC4JG12vEZD";//EAAY6p7po1b8BAFECaZB3qsZCvPMZBTS3RRWEfMYL5v8b496Afk6518ymfsqCmiGJ5QlC1eW4fpYsateP49bLBtEwVZC61XPIyyT02TZBE6p2Gi3df6RjsakuFiychMzE8TO6ZBDY728lKoEVE4mLhWW9V013oM2S2K3mB9ZBCKnJK1HanEUKamPYm9JNZAbWIF4ZD";
//EAAY6p7po1b8BAPqJZCGlIDzQhuZAkwmgZBTFhgfEKOEVOjAjIlxKTfFIHI8lJ1XvMFMP1T1Uxf70wMWZBmcXQwt3nYR60QCi0KrZC5fMjohU45rqfaeW37fvaGNZAYZCOpXj0ZB5h4L1cx4xEbjkY1HLBZCwC4JG12vEZD
$fb->setDefaultAccessToken($access_token);



    //if(isset($keyword) && isset($tab))
    if($tab != null && $keyword != null)
    {

        //echo "<script>alert('No hello');</script>";
        $url1 = "/search";
        $url1.= "?q={$keyword}";
        $url1.= "&type=user";
        $url1.= "&fields=id,name,picture.width(700).height(700)";

        try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($url1);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }
        $user_data = $response->getDecodedBody();

        $url2 = "/search";
        $url2.= "?q={$keyword}";
        $url2.= "&type=page";
        $url2.= "&fields=id,name,picture.width(700).height(700)";

        try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($url2);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }
        $page_data = $response->getDecodedBody();


        $url3 = "/search";
        $url3.= "?q={$keyword}";
        $url3.= "&type=event";
        $url3.= "&fields=id,name,picture.width(700).height(700)";

        try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($url3);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }
        $event_data = $response->getDecodedBody();

        $url4 = "/search";
        $url4.= "?q={$keyword}";
        $url4.= "&type=place";
        $url4.= "&fields=id,name,picture.width(700).height(700)";
        $url4.= "&center={$lat},{$lon}";

        try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($url4);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }
        $place_data = $response->getDecodedBody();


        $url5 = "/search";
        $url5.= "?q={$keyword}";
        $url5.= "&type=group";
        $url5.= "&fields=id,name,picture.width(700).height(700)";

        try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($url5);
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }
        $group_data = $response->getDecodedBody();




        echo json_encode(array($user_data,$page_data,$event_data,$place_data,$group_data));


    }














    else
    if($next != null){
      $mutual = json_decode(file_get_contents($next));

      echo json_encode($mutual);
    }
    else
    if($prev != null){
      $mutual1 = json_decode(file_get_contents($prev));

      echo json_encode($mutual1);
    }
    else
    if($id!=null){

        $url = "https://graph.facebook.com/v2.8/{$id}?fields=id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2){name,picture}},posts.limit(5)&access_token={$access_token}";

        $mutual = json_decode(file_get_contents($url));

        echo json_encode($mutual);
      }

      else
      if($highres != null)
      {

          $high_url  = "https://graph.facebook.com/v2.8/{$highres}/picture?redirect=false&access_token={$access_token}";
          $mutual1 = json_decode(file_get_contents($high_url));

          echo json_encode($mutual1);
        /*try {
        // Returns a `Facebook\FacebookResponse` object
              $response = $fb->get($highres.'/picture?redirect=false&access_token=EAAY6p7po1b8BAPqJZCGlIDzQhuZAkwmgZBTFhgfEKOEVOjAjIlxKTfFIHI8lJ1XvMFMP1T1Uxf70wMWZBmcXQwt3nYR60QCi0KrZC5fMjohU45rqfaeW37fvaGNZAYZCOpXj0ZB5h4L1cx4xEbjkY1HLBZCwC4JG12vEZD');
            } catch(Facebook\Exceptions\FacebookResponseException $e) {
              echo 'Graph returned an error: ' . $e->getMessage();
              exit;
            } catch(Facebook\Exceptions\FacebookSDKException $e) {
              echo 'Facebook SDK returned an error: ' . $e->getMessage();
              exit;
            }*/
      }



      //echo "<script>alert('hello');</script>";
      /*try {
      // Returns a `Facebook\FacebookResponse` object
            $response = $fb->get($next_prev);
          } catch(Facebook\Exceptions\FacebookResponseException $e) {
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
          } catch(Facebook\Exceptions\FacebookSDKException $e) {
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
          }
          $next_data = $response->getDecodedBody();*/




            //$next_prev = null;



    /*else{

      $fb->setDefaultAccessToken($access_token);
      $url1 = "/$id";
      $url1.= "?fields=id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2){name, picture}},posts.limit(5)";

      //echo $url1;
      try {
        $response = $fb->get($url1,$access_token);

      } catch(Facebook\Exceptions\FacebookResponseException $e) {
        // When Graph returns an error
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
      } catch(Facebook\Exceptions\FacebookSDKException $e) {
        // When validation fails or other local issues
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
      }

      $alb_post = $response->getDecodedBody();
      echo json_encode($alb_post);

    }*/




 ?>
