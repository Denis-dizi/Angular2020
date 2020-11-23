<?php
// (2::) W9D2
require_once  __DIR__ . "/../../../vendor/autoload.php";

class ProductEdit {
    public function show() {
        $data = $_POST;

        $sql = sprintf("UPDATE products SET name='as' price = %s, WHERE id = %s, $data["name"], $data["price"], $data["id"]);

        var_dumb();
    }
}


?>