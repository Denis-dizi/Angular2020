<?php
// (2:35/41:) W9D2

use DB\DB;

require_once  __DIR__ . "/../../../vendor/autoload.php";

class ProductEdit {
    public function show() {
        $data = $_POST;
        $sql = sprintf("UPDATE products SET name='%s', price = %s WHERE id = %s", $data["name"], $data["price"], $data["id"]);

        // var_dumb($sql);
        DB::run($sql);
    }
}

(new ProductEdit())->show();
