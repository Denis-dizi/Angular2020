<?php
// (2:46:) W9D2

use DB\DB;

require_once  __DIR__ . "/../../../vendor/autoload.php";

class ProductAdd {
    public function show() {
        $data = $_POST;
        $sql = sprintf("INSERT INTO products (name, price) VALUES ('%s', %s)", $data["name"], $data["price"]);

        // DB::run($sql);
        // (2:52:25)
        $id = DB::run($sql);
        echo json_encode(["id" => $id]);

    }
}

(new ProductAdd())->show();
