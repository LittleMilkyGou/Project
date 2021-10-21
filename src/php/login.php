
<?php



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



$sql1 ="SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";
$res1 = $link->query($sql1);


if ($res1->num_rows == 0){
    $respond['code'] = 1 ;
    $respond['message']="wrong password";
    echo json_encode($respond);
    exit;

}else{
    $respond['code']=2;
    $respond['message']="login success";
    echo json_encode($respond);
    exit;
}
mysqli_close($link);



?>