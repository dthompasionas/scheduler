//TODO: create a work day scheduler

//*create global variables

//*the data the user inputs
let userData;

//*stored text for get item in local storage.
let storedData = localStorage.getItem(['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']);

$(document).ready(function () {


    //*time and date on top
    let date = document.getElementById('currentDay');
    setInterval(() => {
        let now = moment();
        let today = now.format('LLL')
        
        date.textContent = today;
    }, 1000);
    


    //*this is to read the click of the save button
    let saveBtn = $('.saveBtn');

    saveBtn.on('click', function (event) {

        event.preventDefault();

        //console.log('click');
        //*save user data to local storage on click
        userData = $(this).prev().val();
        //*displays user data on the console
        console.log(userData);
        //*sets data in local storage
        localStorage.setItem($(this).prev().attr('id'), userData);

    });
    
    //*color change 
    $('textarea').each(function() {

        //*set the current time to decipher which color each column should be
        let timeNow = moment().format('HH');
       
        
        let selected = parseInt($(this).attr('id'));

        //*if the time hasn't arrived
        if (selected > timeNow) {
            //*display green
            $(this).addClass('future');
        //*if time is equal to now
        } else if (selected == timeNow) {
            //*display red
            $(this).addClass('present');
        //*if time has passed
        } else {
            //*display gray
            $(this).addClass('past');

        }
        
        $('id' + selected).append(localStorage.getItem(selected));
        
        
        
        
        
        
        
        
        
        

        
    });

    
   
    
   








    














































})