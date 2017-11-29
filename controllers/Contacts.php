<?php

class Contacts extends Controller {
    function __construct()
    {
       parent::__construct();
    }

    //Método index
    public function index()
    {
        //Cargamos el módelo de contactos
        $Loader = new LoadModel("ContactsModel");
        $ContactsModel = new ContactsModel();
        $Contacts = $ContactsModel -> getContacts();

        //Utilizamos Layout de nuestro Core
        $ViewContacts = new Layout("Contacts/index.php", compact("Contacts"));

    }
}