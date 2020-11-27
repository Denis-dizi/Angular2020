<?php
// (2:16:)W10D1
session_start();
$_SESSION["id"] = 3;

echo json_encode(["has_access" => isset($_SESSION["id"])]);