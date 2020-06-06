<?php
include "../config.php";

$name = $_POST['username'];
$password = $_POST['pwd'];

// $sql = "insert into user (name,pwd) values ('$name','$pwd')";

$sql1 = "SELECT * FROM `users` WHERE `username`='$username'";
  $res1 = mysql_query($sql1);
  $row1 = mysql_fetch_assoc($res1);
  if ($row1) {
    // 能进入 if 条件, $row1 一定不是 false
    $arr = array(
      "message" => "注册失败, 用户名已经存在",
      "code" => 0
    );

    // 返回给前端
    echo json_encode($arr);

    // exit;
    exit;
  }
  $sql2 = "INSERT INTO `users` (`username`, `password`, `nickname`) VALUES('$username', '$password', '$nickname')";
  $res2 = mysql_query($sql2);
  # 直接返回注成功的信息
  $arr2 = array(
    "message" => "注册成功",
    "code" => 1,
    "userId" => $row['id']
  );

  echo json_encode($arr2);

?>