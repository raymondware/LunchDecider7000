function getLunch() {
			
				var lunchSpots = new Array("Gyro House", "Costco", "BBQ Pete's", "Five Guys", "Qudoba", "Nordstrom cafe", "Teriyaki", "Wing Stop", "Alki Bakery", "Friendz Cafe", "Mucho Burrito", "Jersey Mike's");
				var randomNum = Math.floor(Math.random() * lunchSpots.length);
				var lunchPick = lunchSpots[randomNum];
				
				// Display lunch spot
				document.getElementById('deliveryHolder').style.display = 'block';
				document.getElementById('deliveryPrice').innerHTML = lunchPick;
            }
            
            function clearForm() {
	            document.getElementById("lunchSub").reset();
	            document.getElementById('deliveryHolder').style.display = 'none';
            }
