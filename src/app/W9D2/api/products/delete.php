<?php
// (2::) W9D2
// $data = json_decode(file_get_contents('php://input'), 1);
require_once  __DIR__ . "/../../../vendor/autoload.php";
use DB\DB;

// var_dump($data);
// var_dump($_POST);

class ProductDelete {
    public function show() {
        $sql = "DELETE FROM products WHERE id = " . $_POST["id"];
        DB::run($sql);
    }
}

?>