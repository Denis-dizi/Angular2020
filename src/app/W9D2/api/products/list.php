test 1
<?php
// (2::) W9D2
use DB\DB;
header("Access-Control-Allow-Origin: *");

require_once  __DIR__ . "/../../../vendor/autoload.php";

class ProductList {
    
    public function show() {
        // $response = [];

        $sql = "SELECT * FROM products";

        // $response = DB::getArrayResult($sql);
        $response = DB::run($sql)->fetch_all(MYSQLI_ASSOC);

        echo json_encode($response);
    }
}

(new ProductList())->show();
?>