<?php

class Users extends Controller
{

    function __construct()
    {
        parent::__construct();
    }

    function index()
    {
        $viewUsers = new Views("Users/users.php");
    }

    function getUsers()
    {
        $users = array("Diego", "Ornella", "Manuel", "Marta");
        $viewUsersList = new Views("Users/users_list.html", compact("users"));

    }
}