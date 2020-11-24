<!-- (0:17:) W9D2  -->
test 1 v2 <br>
http://localhost/web/api/products/list.php <br><hr>
<?php
// (0:17:) simulation without real request
class ProductList {
    public function show() {
        $response = [];
        echo json_encode($response);
    }
}
(new ProductList())->show();
?>