function open_window(windowname){
	switch(windowname){
		case 'linkedin': 
			open("https://www.linkedin.com/in/jacek-chrost-408072267/");
			break;
		case 'github':
			open("https://github.com/JacekJC");
			break;
		case 'lastfm':
			open("https://www.last.fm/user/Chuube");
			break;
		case 'spotify':
			open("https://open.spotify.com/user/21bzaey45vg2bwgsvyovevywy");
			break;
		case 'facebook':
			open("https://www.facebook.com/jacek.chrost");
			break;
		default:
			break;
	}
	console.log(windowname);
}

function open_projects(){
}

window.onload = () => {
	console.log("scripts loaded");
}


