<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Credentials', 'false');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("HTTP/1.1 200 OK");

class CrudControl extends CI_Controller
{
	private $data;
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('CrudModel');
	}

	function insertData()
	{
		
		$data = json_decode(file_get_contents("php://input"));

       $insertUser=$this->CrudModel->insertRec($data->empname,$data->emploc,$data->empph,$data->empdept,$data->empdesig);

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
		$displayData['data'] = $this->CrudModel->display();

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

		$deleteuser = $this->CrudModel->deleteID($data->id);

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

		$showuser = $this->CrudModel->showID($data->id);

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

		$updateuser = $this->CrudModel->updateID($data->id,$data->empname,$data->emploc,$data->empph,$data->empdept,$data->empdesig);

		if($updateuser){        
            echo json_encode(["success"=>1,"msg"=>"User updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not updated!"]);
        }
	}



}
?>