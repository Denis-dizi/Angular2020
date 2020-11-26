<?php
// (1:18/33:)W10D1
session_start();

echo json_encode(["has_access" => $_SESSION["id"]]);