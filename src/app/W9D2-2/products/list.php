<?php
// (0:53:)W9D2
require_once  __DIR__ . "/../../../vendor/autoload.php";
use DB\DB;
class ProductList
{
    public function show()
    {
        $sql = "SELECT * FROM products";
        $response = DB::getArrayResult($sql);
        echo $response;

        //(0:57:)
        // $response = DB::run($sql)->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($response);
    }
}


// test 1 v2. W9D2 <br>
// http://localhost/web/api/products/list.php <br><hr>

// (0:17:)W9D2 simulation without real request
// class ProductList {
//     public function show() {
//         $response = [1,2,3];
//         echo json_encode($response);
//     }
// }
(new ProductList())->show();
?>