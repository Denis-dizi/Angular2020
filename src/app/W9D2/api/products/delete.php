<?php
// (1:45:) W9D2

require_once  __DIR__ . "/../../../vendor/autoload.php";// (1:54:)
use DB\DB;
// use W8D3\entity\Product;

// (1:45:)
// $data = json_decode(file_get_contents('php://input'), 1);
// var_dump($data);
// var_dump($_POST);

// (1:52:) W9D2
class ProductDelete {
    public function show() {
        $sql = "DELETE FROM products WHERE id = " . $_POST["id"];
        DB::run($sql);
    }
}
(new ProductDelete())->show();
?>