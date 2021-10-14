<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Credentials', 'false');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("HTTP/1.1 200 OK");

class Empsalinfo extends CI_Controller
{
    private $data;
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('Empsalinfo_modelrest');
    }

    function insertData()
    {
        
        $data = json_decode(file_get_contents("php://input"));

       $insertUser=$this->Empsalinfo_modelrest->insertRec($data->basicsalary,$data->hra,$data->lta,$data->ma,$data->da,$data->pf,$data->grosspay);

        if($insertUser){        
            echo json_encode(["success"=>1,"msg"=>"User Inserted."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
   
    }

    //insert()

    function showData()
    {
        $displayData['data'] = $this->Empsalinfo_modelrest->display();

        if ( $displayData['data'] )
        {
            echo json_encode(["success"=>1,"msg"=>"Records Fetched.","user"=>$displayData]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Records not Fetched!"]);
        }
    }   

    function deleteData()
    {
        $data = json_decode(file_get_contents("php://input"));

        $deleteuser = $this->Empsalinfo_modelrest->deleteID($data->id);

        if($deleteuser){        
            echo json_encode(["success"=>1,"msg"=>"User deleted."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not deleted!"]);
        }

    }

    function showByID()
    {
        $data = json_decode(file_get_contents("php://input"));

        $showuser = $this->Empsalinfo_modelrest->showID($data->id);

        if($showuser){        
            echo json_encode(["success"=>1,"msg"=>"User Fetched.","user"=>$showuser]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Fetched!"]);
        }       
    }

    function updateByID()
    {
        $data = json_decode(file_get_contents("php://input"));

        $updateuser = $this->Empsalinfo_modelrest->updateID($data->id,$data->basicsalary,$data->hra,$data->lta,$data->ma,$data->da,$data->pf,$data->grosspay);

        if($updateuser){        
            echo json_encode(["success"=>1,"msg"=>"User updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not updated!"]);
        }
    }



}
?>