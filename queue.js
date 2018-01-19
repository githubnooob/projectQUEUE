// declaration of variables needed

var x, y, i=0, wid, hei, j=0, k=0, z=0, checker1=0, checker2=0, checker3=0,checker4=0, checker5= 0, j4=0, z1=1100 , j1=0, j2=0;
var starterBus = false;
var starterCar =false;
var starterCar1 = false;
var starterBus1 = false;
var checkerBool1 = true;
var starterBus1_1 =false;
var starterCar2 = false;
var starterCar2_1 = false;
var starterBus2 = false;
var starterBus2_1 = false;
var starterBus3 = false;
var starterBus3_1 = false;
var j5=0, j6=0, j7=0, j8 = 0, j9=0, j10=0;
var example=0, example1 =55, example2 = 0, example3 = 0, example4 = 0, example5 = 0, example6 = 0;
var enqueueCar2 = false, enqueueBus =false, enqueueCar1 = false, enqueueBus1 = false, enqueueBus2 = false, enqueueBus3 = false;
var enqueueCar1_a = true, enqueueBus1_a = true, enqueueBus2_a= true , enqueueBus3_a= true , enqueueBus_a= true , enqueueCar2_a = true;
var rear1 = false, rear2 = false, rear3 = false, rear4 = false, rear5 = false, rear6 = false, init = false;
var blinker, blinker1, blinker2; 
var on = false , FirstCarBlinker = false, FirstBusBlinker = false, SecondBusBlinker = false, ThirdBusBlinker = false, SecondCarBlinker = false, ForthBusBlinker = false;
var DequeueBlinker1 = false, DequeueBlinker2 = false, DequeueBlinker3 = false, DequeueBlinker4 = false, DequeueBlinker5 = false, DequeueBlinker6 = false;  



//end of variable declaration


//starting of setup function 
function setup(){

	createCanvas(windowWidth, windowHeight);
} 


// end of setup function

// end of draw function
function draw(){

	background(255,250,140);
	textSize(28);
  	text("LINEAR QUEUE REPRESENTATION", 450, 50);
  	textSize(18);
  	text("(For Example- Queue of Vehicles in Fuel Line)", 500, 80);
  	text("(Click the buttons to enqueue or dequeue vehicles.)", 460, 560);

  	if(on){
  		textSize(20);
  		fill(255,0,0);
  		text("The Queue is Empty.", 550, 180);
  	}
  	noFill();
  	drawRect(1030, 027, 314, 299);
  	textSize(20);
  	fill(255,0,0);
  	text("Informations", 1120, 55);
  	fill(0);
  	textSize(15);
  	text("- MAXSIZE of Queue = 6", 1050, 95);
  	text("- Enqueuing will increase rear by one", 1050, 115);
  	text("  and add the vehicles.", 1050, 135);
  	text("- Dequeuing will remove the vehicle at front ", 1050, 155);
  	text("  and increase the front by one.", 1050, 175);
  	text("- Vehicles will not dequeue if there are ", 1050, 195);
  	text("  no vehicles in the line(queue).", 1050, 215);
  	text("- At first Front is set at 0 and rear at -1. ", 1050, 235);
  	fill(2550,0,0);
  	textSize(18);
    text(" *NOTE:", 1050, 260);
     fill(0);
  	textSize(13);
    text("- Don't click the enqueue Button simultaneously!", 1050, 275);
    text("  It will cause the vehicles at first to overlap.", 1050, 295);
    text("  Click the button at a certain interval.", 1050, 315);

	drawPump(); //calling drawPump function
	fill(255);
	drawRect(0, 330, windowWidth, 50);
	fill(0)
	drawLine();

	if(enqueueBus1){
		if(example2 <= 560){
			drawBus(example2, 275, 255, 0, 0);
			example2+=3.5;
		}

			else{
			if(enqueueBus1_a){
			drawBus(560, 275, 255,0,0);
			FirstBusBlinker = false;
			}

		}
	}
	if(starterBus){

		checker1=560+k;
		drawBus(checker1, 275, 255,0,0);
		k=k+3.5;
		if(checker1 > windowWidth){
			DequeueBlinker2 = false;
		}

	}

	if(enqueueCar1){
		if(example1 <= 690){
		drawCar(example1, 312, 250, 100, 0);
		example1+=4.5;
	}else{
			if(enqueueCar1_a == true){
			drawCar(690, 312, 250, 100, 0);
			FirstCarBlinker= false;
			fill(0);
			textSize(12);
			text("First In Queue", 700, 270);

			}
		}


	}


	if(starterCar){

		if(z>860 && z<1000){
		fill(0);
	  	drawRect(883, 429, 107, 52);
	  	fill(255);
	  	drawRect(885, 430, 103, 50);
	  	fill(0);
	  	makeArrow(870, 490);
	  	noStroke();
		textSize(19);
	  	text("First In", 906, 463);
 	 	}

  	if(z > 1100 && z < windowWidth){
  		fill(0);
		drawRect(1183, 429, 107, 52);
		fill(255);
		drawRect(1185, 430, 103, 50);
		fill(0);
		noStroke();
		textSize(19);
		makeArrow(1170, 495);
		text("First Out", 1200 , 463);
	
  		}

		z=690+j;
		drawCar(z ,312, 250, 100, 0);
		j=j+4.5;
		if(z > windowWidth){
			DequeueBlinker1 = false;
		}

	}

	if(starterCar1){
				
		z1=1100+j1;
		drawCar(z1 ,312, 250, 100, 0);
		j1=j1+4;
		if(z1 > windowWidth){
			DequeueBlinker5 = false;
		}
	
	}


	if(enqueueBus2){

		if(example3 <=420){
			drawBus(example3, 275, 0, 0, 255);
			example3+= 3.2;		
		}else{
			if(enqueueBus2_a){
				drawBus(420, 275, 0,0, 255);
				SecondBusBlinker = false;
			}
		}
	}

	if(starterBus1){

		checker2 = 420+j2;
		drawBus(checker2, 275,0,0,255);
		j2+=3.2;
		if(checker2 > windowWidth){
			DequeueBlinker3 = false;
		}
		

	}


	if(enqueueBus3){
		if(example4 <= 280){
			drawBus(example4, 275, 0, 200, 0);
			example4+= 3;
		}else{
			if(enqueueBus3_a){
			drawBus(280, 275, 0,200,0);
			ThirdBusBlinker = false;
			}
		}
	}

	if(starterBus2){
	
		checker3 = 280+j4;
		drawBus(checker3, 275,0,200,0);
		j4+=3;
		if(checker3 > windowWidth){
			DequeueBlinker4 = false;
		}
			

	}

	if(enqueueCar2){
		if(example <=155){
		drawCar(example, 312, 210, 50, 30);
		example+=2.8;
		}
		else{
			if(enqueueCar2_a){
			drawCar(155, 312, 210, 50, 30);
			SecondCarBlinker = false;
		}
		}
	}

	if(starterCar2){

		checker4 = 150+j6;
		drawCar(checker4, 312, 210, 50,30);
		j6+=2.8;
		if(checker4 > windowWidth){
			DequeueBlinker5 = false;
		}
	
	}


	if(enqueueBus){
		if(example5 <= 25){
		drawBus(example5, 275, 210, 200, 50);
		example5+=2.6;
		}else{
			if(enqueueBus_a){
			drawBus(25, 275, 210, 200, 50);
			ForthBusBlinker = false;
			textSize(12);
			fill(0);
			noStroke();
			text("Last In Queue", 40, 270);
			}
		}
	}

	if(starterBus3){

		checker5 = 25 + j8;
		drawBus(checker5, 275, 210, 200, 50);
		j8+=2.6
		if(checker5 > windowWidth){
			DequeueBlinker6 = false;
			on = true;
		}

		
	}

	if(!starterCar){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(680,500);
		text("Front Of Queue = 0", 660, 450);


	}

	if(starterCar && !starterBus){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(555,500);
		text("Front Of Queue = 1", 555, 450);

	}
	if(starterBus && !starterBus1){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(405, 500);
		text("Front Of Queue = 2", 405, 450);

	}
	if(starterBus1 && !starterBus2){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(265,500);	
		text("Front Of Queue = 3", 265, 450);

	}
	if(starterBus2 && !starterCar2){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(155, 500);
		text("Front Of Queue = 4", 155, 450);

	}
	if(!starterBus3 && starterCar2){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(10, 500);
		text("Front Of Queue = 5", 10, 450);

	}

	if(!init){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(850, 500);
		text("Rear of Queue = -1", 855 , 450);
	}
	if(rear1){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(680, 500);
		text("Rear of Queue = 0", 695 , 480);

	}

	if(rear2){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(555,500);
		text("Rear of Queue = 1", 555 , 480);

	}

	if(rear3){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(405,500);
		text("Rear of Queue = 2", 405 , 480);

	}
	if(rear4){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(265,500);
		text("Rear of Queue = 3", 265 , 480);

	}
	if(rear5){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(155,500);
		text("Rear of Queue = 4", 155 , 480);

	}
	if(rear6){
		noStroke();
		fill(0);
		textSize(20);
		makeArrow(10,500);
		text("Rear of Queue = 5", 10 , 480);
		fill(255,20,10);
		text("Enqueueing Queue will now result in overflow and not enqueue more vehicles.", 320, 150);

	}	

		fill(0,0,0,200);
		textSize(12);
	  	text("0", 730, 376);
	  	text("1", 610,376);
	  	text("2", 470, 376);
	  	text("3", 335, 376);
	  	text("4", 195, 376);
	  	text("5", 65, 376);

}

//starting mousePressed function
function mousePressed(){
	
	// for enqueue button
	if(mouseX>570 && mouseY >600 && mouseX < 650 && mouseY <635 && enqueueCar1 == false){ 
		enqueueCar1 = true;
		FirstCarBlinker = true;
		rear1 = true;
		init = true;

		
	}

	else if(mouseX>570 && mouseY >600 && mouseX <650 && mouseY <635 && enqueueCar1 == true && enqueueBus1 == false){
		
		enqueueBus1 = true;
		FirstBusBlinker = true;
		rear1 = false;
		rear2 = true;

	}


	else if(mouseX>570 && mouseY >600 && mouseX <650 && mouseY <635 && enqueueBus1 == true && enqueueBus2 == false){

		enqueueBus2 = true;
		SecondBusBlinker = true;
		rear2 = false;
		rear3 = true;

	}
	else if(mouseX>570 && mouseY >600 && mouseX <650 && mouseY <635 && enqueueBus2 == true && enqueueBus3 == false){

		enqueueBus3 = true;
		ThirdBusBlinker = true;
		rear3 = false;
		rear4 = true;

	}

	else if(mouseX>570 && mouseY >600 && mouseX <650 && mouseY <635 && enqueueBus3 == true && enqueueCar2 == false){

		enqueueCar2 = true;
		SecondCarBlinker = true;
		rear4 = false;
		rear5 = true;

	}
	
	else if(mouseX>570 && mouseY >600 && mouseX <650 && mouseY <635 && enqueueCar2 ==true && enqueueBus == false){

		enqueueBus = true;
		ForthBusBlinker = true;
		rear5 = false;
		rear6 = true;
	}



	//end of enqueue button

	//start of dequeue button 
	if(mouseX > 660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueCar1 == true && enqueueCar1_a == true){
		
		starterCar = true;
		enqueueCar1_a = false;
		DequeueBlinker1 = true;
		
	}

	else if(mouseX > 660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueBus1_a == true && enqueueBus1 == true ){
		starterBus = true;
		enqueueBus1_a = false;
		DequeueBlinker2 = true;
	
	}
	else if(mouseX >660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueBus2_a == true && enqueueBus2 == true){
		starterBus1 = true;
		enqueueBus2_a = false;
		DequeueBlinker3 = true;
	}

	else if(mouseX > 660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueBus3_a == true && enqueueBus3 == true){
		starterBus2 = true;
		enqueueBus3_a = false;
		DequeueBlinker4 = true;
	}

	else if(mouseX > 660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueCar2_a == true && enqueueCar2 == true){
		starterCar2 = true;
		enqueueCar2_a = false;
		DequeueBlinker5 = true;
	}
	
	else if(mouseX > 660 && mouseX < 740 && mouseY > 600 && mouseY < 635 && enqueueBus_a == true && enqueueBus ==true){
		starterBus3 = true;
		enqueueBus_a = false;
		DequeueBlinker6 = true;
	}



	//end of dequeue button
}

	//end of mousePressed function

//function prototype declartaion for drawing rectangle
function drawRect(x, y, wid ,hei){

	stroke(0);
	strokeWeight(1);
	rect(x, y, wid, hei);
	fill(0);
	stroke(255);
	strokeWeight(3);
	rect(570, 600, 80, 35);
	rect(660, 600, 80, 35);
	textSize(15);
	noStroke();
	fill(255);
	text('Enqueue',580, 623);
	text('Dequeue', 670, 623);
}

//end of drawRect funtion

// start of drawLIne function
function drawLine(){

	strokeWeight(2);
	stroke(0,0,0,60);
	line(800, 332, 800, 380 );
	line(680, 332, 680, 380);
	line(545, 332, 545, 380);
	line(408, 332, 408 , 380);
	line(265, 332, 265, 380);
	line(143, 332, 143, 380);
	stroke(0);

	for(i=0; i<=1400; ){
		strokeWeight(1);
		line(10+i, 355, 30+i, 355);
		i+=50;
	}


}

// end of drawline Function

//function for drawing bus
function drawBus(x, y, color1, color2, color3){
	// making framing
	strokeWeight(1);
	stroke(0);
	fill(color1,color2,color3);
	rect(x ,y , 110,65);

	// making wheels
	strokeWeight(0.2);
	stroke(0);
	fill(10,10,10);
	ellipse(x+22, y+70, 30, 30);
	ellipse(x+90, y+70, 30, 30);

	// making window
	fill(255);
	stroke(128, 128, 128);
	strokeWeight(1);
	rect(x+8, y+05, 10, 10);
	rect(x+28, y+05, 10, 10);
	rect(x+48, y+05, 10, 10);
	rect(x+68, y+05, 10, 10);
	rect(x+88, y+05, 10, 10);

}

// end of drawBus function

//function for drawing car
function drawCar(x , y, color1, color2, color3){
	fill(color1, color2, color3);
	rect(x, y, 95, 30);
	strokeWeight(0.2);
	stroke(0);
	fill(0);
	ellipse(x+22,y+30, 20, 20);
	ellipse(x+63, y+30, 20, 20);
	stroke(0);
	fill(255);
	quad(x+30,y-25,x+60,y-25, x+80, y+1, x+8, y+1);
}
//end of drawCar function

//function for drawing Pump
function drawPump(){

	stroke(0);
	strokeWeight(2);
	fill(0,200,0);
	rect(860, 183, 100, 150);
	fill(255,0,0);

	// draw meter
	fill(255);
	rect(867, 190, 85, 50);
	stroke(0);
	strokeWeight(1);
	rect(867, 250, 85, 015);
	fill(0);
	textSize(11);
	noStroke();
	text("Petrol / Diesel", 876, 261);
	textSize(20);
	if(FirstCarBlinker){ 							//for the blinking of enqueu
		textSize(15);
		blinker = random(0,200);
		blinker1 = random(0, 255);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	}

	if(FirstBusBlinker){
		textSize(15);
		blinker = random(0,200);
		blinker1 = random(0, 20);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	
	}


	if(SecondBusBlinker){
		textSize(15);
		blinker = random(0,200);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	
	}

	if(ThirdBusBlinker){
		textSize(15);
		blinker = random(0,20);
		blinker1 = random(0, 155);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	
	}

	if(SecondCarBlinker){
		textSize(15);
		blinker = random(0,20);
		blinker1 = random(0, 255);
		blinker2 = random(0,25);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	
	}


	if(ForthBusBlinker){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Enqueueing", 871, 215);
	
	}

	if(DequeueBlinker1){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	}

	if(DequeueBlinker2){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	
	}
	if(DequeueBlinker3){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	
	}
	if(DequeueBlinker4){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	
	}
	if(DequeueBlinker5){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	
	}
	if(DequeueBlinker6){
		textSize(15);
		blinker = random(0,50);
		blinker1 = random(0, 55);
		blinker2 = random(0,225);
		fill(blinker, blinker1, blinker2);
		text("Dequeueing", 871, 215);
	
	}
}

//end of drawPump function

//function for making arrow
function makeArrow(x, y){
	fill(0);
	triangle(x+65, y-100, x+50, y-80, x+80, y-80);

}

// end of function for drawing arrow

