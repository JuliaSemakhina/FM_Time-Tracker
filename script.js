const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

window.addEventListener("load", (evt)=>{
    getJsonData("daily");
});

weekly.addEventListener("click", function(){
   
    getJsonData("weekly");
    
});

daily.addEventListener("click", function(){
   
    getJsonData("daily");
    
});

monthly.addEventListener("click", function(){
   
    getJsonData("monthly");
    
});

function getJsonData(timeFrame){
    fetch("./data.json").then(response =>{
        return response.json();
    }).then (data=> {
        data.forEach((value, index) => {
            const current = value.timeframes[timeFrame].current;
            const previous = value.timeframes[timeFrame].previous;
            const title = value.title;
            let textcontent;

            //store the text in variables
            const titleElement = document.getElementById(`title-${index}`);
            const currentElementHrs = document.getElementById(`current-${index}`);
             
            titleElement.innerText = title;
            currentElementHrs.innerText = current.toString() + " hrs";

                        //establish a span to hold the previous timeframe data & append it to the currentHours <p>
                        const spanNode = document.createElement("span");
                        if(timeFrame == 'daily'){
                            textnode = document.createTextNode("Yesterday - " + previous.toString() + "hrs");
                        }
                        else if(timeFrame == 'weekly') {
                            textnode = document.createTextNode("Last Week - " + previous.toString() + "hrs");
                        }
            
                        else {
                            textnode = document.createTextNode("Last Month - " + previous.toString() + "hrs");
                        }
                        
                        spanNode.appendChild(textnode);
                        currentElementHrs.appendChild(spanNode);
            
            
        })
    });
}