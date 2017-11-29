<?php

//Extiende del nucleo Model
class ContactsModel extends Model
{

    //Obtener contactos
    public function getContacts()
    {
        //Consulta SQL
        $query = "select * from contacts";

        //Retornar un array
        $result = $this -> mariadb -> query($query);

        //Retornando el valor
        return $result -> fetchAll();
    }

}