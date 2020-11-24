test 1 v2. W9D2 <br>
http://localhost/web/api/products/list.php <br><hr>
<?php
// (0:17:)W9D2 simulation without real request
class ProductList {
    public function show() {
        $response = [1,2,3];
        echo json_encode($response);
    }
}
(new ProductList())->show();
?>