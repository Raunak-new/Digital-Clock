import React,{useState,useEffect} from "react";



function Clock(){

	const[time,setTime]=useState(new Date())

	useEffect(()=>{
		const intervalId=setInterval(()=>{
			setTime(new Date())
		},1000)


		return()=>{
			clearInterval(intervalId)
		}
	},[])


	function format(){

		let hours =time.getHours()
		const min=time.getMinutes()
		const sec=time.getSeconds()
		const meridian =hours>=12? "PM":"AM";

		hours=hours%12|| 12 //converts 

		return`${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridian}`

	}

	function padZero(number){
		return (number <10 ? "0":"")+number;
	}
	return(
	<div className="clock-container">
		<div className="clock">
		<span>
			{format()}
		</span>
		</div>

	</div>
	)
}
export default Clock


