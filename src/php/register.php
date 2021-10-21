<?php

header('content-type"text/html;charset="utf-8"');

$username = $_POST['username'];
$password = $_POST['password'];

$link = mysqli_connect("mysql","php","php","cloud_computing");

if(!$link){
    $respond['code']=0;
    $respond['message']="fail to connect database";
    echo jason_encode($respond);
    exit;
}

mysqli_query($link,"set names 'utf8'");


$sql = "SELECT * FROM users WHERE username= '{$username}'";
$res = $link->query($sql);

if ($res->num_rows > 0){
    $respond['code']=1;
    $respond['message']="username exists";
    echo json_encode($respond);
    exit;
}

$sql1 =" INSERT INTO users(username,password) VALUES('{$username}','{$password}')";
$res1 = mysqli_query($link, $sql1);


if (!$res1){
    $respond['code'] = 2 ;
    $respond['message']="fail sign up";
    echo json_encode($respond);
    exit;

}else{
    $respond['code']=3;
    $respond['message']="sign up success";
    echo json_encode($respond);
    exit;
}
mysqli_close($link);



?>