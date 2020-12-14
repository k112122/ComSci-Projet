class studentRegister{


constructor(){
this.greeting = createElement("Welcome"+username.value);
this.register = createButton("Register for Field Day");
this.schedule = createButton("My Schedule");
this.next1 = createButton("Next");
this.next2 = createButton("Next");
this.name = createInput("Name");
this.homeroom = createInput("Homeroom");
this.ms = createButton("MS");
this.hs = createButton("HS");
this.refer = createElement("h3");
}


hide(){

    this.greeting.hide();
    this.register.hide();
    this.schedule.hide();
    this.next1.hide();
    this.next2.hide();
    this.name.hide();
    this.homeroom.hide();
    this.ms.hide();
    this.hs.hide();
    this.refer.hide();

}


display(){

this.greeting.position(displayWidth/2, displayHeight/2);
this.register.position(displayWidth/2-10, displayHeight/2-10);
this.schedule.position(displayWidth/2-20, displayHeight/2-20);


this.register.mousePressed(()=>{

    this.register.hide();
    this.schedule.hide();
    this.next1.position(displayWidth/2-30, displayHeight/2-30);
    this.name.position(displayWidth/2-50, displayHeight/2-50);
    this.homeroom.position(displayWidth/2-60, displayHeight/2-60);
    this.ms.position(displayWidth/2-70, displayHeight/2-70);
    this.hs.position(displayWidth/2-80, displayHeight/2-80);
    this.next1.position(displayWidth/2-30, displayHeight/2-30);

});


this.next1.mousePressed(()=>{

    this.next2.position(displayWidth/2-40, displayHeight/2-40);
    this.refer.position(displayWidth/2-90, displayHeight/2-90);
    
});



}


}