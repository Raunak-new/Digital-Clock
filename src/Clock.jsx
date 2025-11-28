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

		hours=hours%12|| 12 // this takes the reminder and displays it like 13 divided by 12 is 1 and displays 1 pm instead of 13pm

		return`${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridian}`

	}
	/// this function Adds Zeros in front of the number that  is less than 10
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



