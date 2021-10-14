<?php
/**
 * 
 */
class CrudModel extends CI_Model
{
	
	public function insertRec($empname,$emploc,$empph,$empdept,$empdesig)
	{
		$tuple=array('user_id' =>'' ,
		'empname'=>$empname,
		'emploc'=>$emploc,
		'empph'=>$empph,
		'empdept'=>$empdept,
		'empdesig'=>$empdesig );

		return($this->db->insert('empinfo', $tuple));
	}

	function display()
	{
		$qry=$this->db->get('empinfo');
		return $qry->result();
	}

	function deleteID($id)
	{
		//echo $id;
		$this->db->where('user_id',$id);
		$this->db->delete('empinfo');
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}

	function showID($id)
	{
		$this->db->where('user_id',$id);
		$qry = $this->db->get('empinfo');
		return $qry->result();
	}

	function updateID($id,$empname,$emploc,$empph,$empdept,$empdesig)
	{
		$tuple=array(
		'user_id'=>$id,
		'empname'=>$empname,
		'emploc'=>$emploc,
		'empph'=>$empph,
		'empdept'=>$empdept,
		'empdesig'=>$empdesig );

		 $this->db->where('user_id',$id);
		$this->db->update('empinfo',$tuple);
		if($this->db->affected_rows()>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
?>