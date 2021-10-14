<?php
/**
 * 
 */
class Empsalinfo_modelrest extends CI_Model
{
	
	public function insertRec($basicsalary,$hra,$lta,$ma,$da,$pf,$grosspay)
	{
		$tuple=array('user_id' =>'' ,
		'basicsalary'=>$basicsalary,
		'hra'=>$hra,
		'lta'=>$lta,
		'ma'=>$ma,
		'da'=>$da, 
    'pf'=>$pf,
    'grosspay'=>$grosspay);

		return($this->db->insert('empsalinfo', $tuple));
	}

	function display()
	{
		$qry=$this->db->get('empsalinfo');
		return $qry->result();
	}

	function deleteID($id)
	{
		//echo $id;
		$this->db->where('user_id',$id);
		$this->db->delete('empsalinfo');
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
		$qry = $this->db->get('empsalinfo');
		return $qry->result();
	}

	function updateID($id,$basicsalary,$hra,$lta,$ma,$da,$pf,$grosspay)
	{
		$tuple=array(
		'user_id'=>$id,
		'basicsalary'=>$basicsalary,
		'hra'=>$hra,
		'lta'=>$lta,
		'ma'=>$ma,
		'da'=>$da, 
    'pf'=>$pf,
    'grosspay'=>$grosspay );

		 $this->db->where('user_id',$id);
		$this->db->update('empsalinfo',$tuple);
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