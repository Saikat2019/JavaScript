let myTodos = 
	{
		day: 'Monday',
		meetings: 0,
		meetingDone: 0,
	}

let addMeeting = function (todo,meet = 0) 
		{
			todo.meetings = todo.meetings+meet;
		}	

let meetDone = function(todo, meet = 0)
		{
			todo.meetingDone=todo.meetingDone-meet;
		}

let resetDay = function(todo)		
		{
			todo.meetings=0;
			todo.meetingDone=0;
		}

let getSummeryOfDay = function(todo)		
		{
			let meetLeft = todo.meetings + todo.meetingDone;
			return `you have ${meetLeft} meetings today !`;
		}

addMeeting(myTodos,4);
addMeeting(myTodos,4);

meetDone(myTodos,5);

console.log(myTodos);
console.log(getSummeryOfDay(myTodos));